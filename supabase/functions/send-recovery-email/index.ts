
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
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
  password: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, shareCode, password }: RecoveryEmailRequest = await req.json();

    console.log("Sending recovery email to:", email, "for share code:", shareCode);

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

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, messageId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-recovery-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
