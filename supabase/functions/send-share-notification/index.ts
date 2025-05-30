
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ShareNotificationRequest {
  email: string;
  shareCode: string;
  shareType: 'clipboard' | 'notepad' | 'file';
  isEncrypted: boolean;
  fileName?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, shareCode, shareType, isEncrypted, fileName }: ShareNotificationRequest = await req.json();

    console.log("Sending share notification to:", email, "for share code:", shareCode);

    const shareTypeText = shareType === 'clipboard' ? 'Clipboard Content' : 
                         shareType === 'notepad' ? 'Note' : 
                         'File';

    const expiryText = shareType === 'clipboard' ? '24 hours' : 
                      shareType === 'notepad' ? '7 days' : 
                      '48 hours';

    const emailResponse = await resend.emails.send({
      from: "Anonymous Share <no-reply@anonshare.live>",
      to: [email],
      subject: `${isEncrypted ? '🔐 ' : ''}${shareTypeText} Shared - Code: ${shareCode}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Content Shared</title>
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
              background: linear-gradient(135deg, #28a745 0%, #20c997 100%); 
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
              border: 2px solid #28a745; 
              border-radius: 6px; 
              padding: 20px; 
              margin: 20px 0; 
              text-align: center; 
            }
            .share-code { 
              font-size: 32px; 
              font-weight: bold; 
              color: #28a745; 
              letter-spacing: 4px; 
              margin: 10px 0; 
            }
            .info-box { 
              background: #e7f3ff; 
              border: 1px solid #b3d7ff; 
              border-radius: 6px; 
              padding: 15px; 
              margin: 20px 0; 
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              padding-top: 20px; 
              border-top: 1px solid #e9ecef; 
              color: #6c757d; 
              font-size: 14px; 
            }
            .cta-button { 
              display: inline-block; 
              background: #28a745; 
              color: white; 
              padding: 12px 24px; 
              text-decoration: none; 
              border-radius: 6px; 
              font-weight: bold; 
              margin: 20px 0; 
            }
            .security-note { 
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
            <h1>${isEncrypted ? '🔐' : '📋'} ${shareTypeText} Shared</h1>
            <p>Your ${shareType} has been shared successfully</p>
          </div>
          
          <div class="content">
            <p>Hello,</p>
            <p>Your ${shareTypeText.toLowerCase()} has been shared anonymously${isEncrypted ? ' with end-to-end encryption' : ''}. Here are the access details:</p>
            
            <div class="code-box">
              <p><strong>Share Code:</strong></p>
              <div class="share-code">${shareCode}</div>
              <p style="margin: 15px 0 5px 0; color: #6c757d; font-size: 14px;">
                Share this code with anyone who needs access
              </p>
            </div>
            
            ${fileName ? `
            <div class="info-box">
              <p><strong>📁 File Name:</strong> ${fileName}</p>
            </div>
            ` : ''}
            
            <div class="info-box">
              <p><strong>📅 Expires:</strong> ${expiryText}</p>
              <p><strong>🔒 Encryption:</strong> ${isEncrypted ? 'Yes - Password protected' : 'No - Public access'}</p>
              <p><strong>🌐 Access:</strong> Anonymous - No login required</p>
            </div>
            
            ${isEncrypted ? `
            <div class="security-note">
              <strong>🔐 Encrypted Content:</strong>
              <p style="margin: 10px 0;">This ${shareType} is protected with end-to-end encryption. Recipients will need both the share code and the password you set to access the content.</p>
            </div>
            ` : ''}
            
            <div style="text-align: center;">
              <a href="https://anonshare.live" class="cta-button">Access Content</a>
            </div>
            
            <p><strong>How to access:</strong></p>
            <ol>
              <li>Visit <a href="https://anonshare.live" style="color: #28a745;">anonshare.live</a></li>
              <li>Enter the share code: <strong>${shareCode}</strong></li>
              ${isEncrypted ? '<li>Enter the password when prompted</li>' : ''}
              <li>View, copy, or download your content</li>
            </ol>
            
            <p>This content will automatically expire after ${expiryText}. No personal information is stored with your ${shareType}.</p>
            
            <p>Best regards,<br>Anonymous Share Team</p>
          </div>
          
          <div class="footer">
            <p>This is an automated notification from Anonymous Share.<br>
            Your privacy is our priority - all shares are completely anonymous.</p>
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
    console.error("Error in send-share-notification function:", error);
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
