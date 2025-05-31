
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.8";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface RecoveryEmailRequest {
  email: string;
  shareCode: string;
}

const handler = async (req: Request): Promise<Response> => {
  const timestamp = new Date().toISOString();
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, shareCode }: RecoveryEmailRequest = await req.json();
    
    console.log(`[${timestamp}] Recovery request initiated - Email: ${email}, Share Code: ${shareCode}`);

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log(`[${timestamp}] Invalid email format: ${email}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Invalid email format" 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    // Search for matching records with the email and share code
    console.log(`[${timestamp}] Searching for share with code: ${shareCode} and recovery email: ${email}`);
    
    const { data: shareData, error: shareError } = await supabase
      .from('shares')
      .select('*')
      .eq('code', shareCode)
      .eq('recovery_email', email)
      .single();

    if (shareError || !shareData) {
      console.log(`[${timestamp}] No matching record found - Error: ${shareError?.message || 'No data'}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "We couldn't find any content linked to this email address." 
        }),
        {
          status: 404,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`[${timestamp}] Found matching share record - ID: ${shareData.id}, Type: ${shareData.type}, Encrypted: ${shareData.is_encrypted}`);

    // Check if the share is encrypted and has a password
    if (!shareData.is_encrypted || !shareData.encrypted_payload) {
      console.log(`[${timestamp}] Share is not encrypted or has no password - cannot recover`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "This content doesn't have password protection enabled." 
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Extract password from encrypted_payload
    let password;
    try {
      const encryptionData = JSON.parse(shareData.encrypted_payload);
      password = encryptionData.password;
      
      if (!password) {
        throw new Error("No password found in encryption data");
      }
    } catch (parseError) {
      console.log(`[${timestamp}] Failed to extract password from encrypted_payload: ${parseError.message}`);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Unable to recover password - encryption data corrupted." 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`[${timestamp}] Password extracted successfully, sending recovery email to: ${email}`);

    // Send recovery email
    const emailResponse = await resend.emails.send({
      from: "Anonymous Share <no-reply@anonshare.live>",
      to: [email],
      subject: "Password Recovery - Anonymous Share",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Recovery</title>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              line-height: 1.6; 
              color: #333; 
              max-width: 600px; 
              margin: 0 auto; 
              padding: 20px; 
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 30px; 
              text-align: center; 
              border-radius: 8px 8px 0 0; 
            }
            .content { 
              background: #f8f9fa; 
              padding: 30px; 
              border-radius: 0 0 8px 8px; 
            }
            .code-box { 
              background: #fff; 
              border: 2px solid #e9ecef; 
              border-radius: 6px; 
              padding: 20px; 
              margin: 20px 0; 
              text-align: center; 
            }
            .share-code { 
              font-size: 32px; 
              font-weight: bold; 
              color: #667eea; 
              letter-spacing: 4px; 
              margin: 10px 0; 
            }
            .password { 
              font-family: monospace; 
              font-size: 18px; 
              background: #f1f3f4; 
              padding: 10px; 
              border-radius: 4px; 
              word-break: break-all; 
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              padding-top: 20px; 
              border-top: 1px solid #e9ecef; 
              color: #6c757d; 
              font-size: 14px; 
            }
            .warning { 
              background: #fff3cd; 
              border: 1px solid #ffeaa7; 
              border-radius: 6px; 
              padding: 15px; 
              margin: 20px 0; 
              color: #856404; 
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>🔐 Password Recovery</h1>
            <p>Your encrypted content password has been recovered</p>
          </div>
          
          <div class="content">
            <p>Hello,</p>
            <p>You requested password recovery for your encrypted content. Here are your access details:</p>
            
            <div class="code-box">
              <p><strong>Share Code:</strong></p>
              <div class="share-code">${shareCode}</div>
            </div>
            
            <div class="code-box">
              <p><strong>Password:</strong></p>
              <div class="password">${password}</div>
            </div>
            
            <div class="warning">
              <strong>⚠️ Security Notice:</strong>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>This password grants access to your encrypted content</li>
                <li>Keep this email secure and delete it after use</li>
                <li>The content will expire according to its original settings</li>
                <li>If you didn't request this recovery, someone else may have access to your recovery email</li>
              </ul>
            </div>
            
            <p>To access your content:</p>
            <ol>
              <li>Go to <a href="https://anonshare.live" style="color: #667eea;">anonshare.live</a></li>
              <li>Enter the share code: <strong>${shareCode}</strong></li>
              <li>Enter the password when prompted</li>
            </ol>
            
            <p>If you have any questions or didn't request this recovery, please ignore this email.</p>
            
            <p>Best regards,<br>Anonymous Share Team</p>
          </div>
          
          <div class="footer">
            <p>This is an automated message from Anonymous Share.<br>
            For security reasons, this recovery information is only sent once.</p>
          </div>
        </body>
        </html>
      `,
    });

    if (emailResponse.error) {
      console.error(`[${timestamp}] Failed to send recovery email:`, emailResponse.error);
      return new Response(
        JSON.stringify({ 
          success: false, 
          message: "Unable to send email. Please try again later." 
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    console.log(`[${timestamp}] Recovery email sent successfully - Message ID: ${emailResponse.data?.id}`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Check your inbox for recovery information.",
        messageId: emailResponse.data?.id 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
    
  } catch (error: any) {
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] Error in send-recovery-email function:`, error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: "An unexpected error occurred. Please try again later." 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
