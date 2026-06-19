import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-6cf48fbc/health", (c) => {
  return c.json({ status: "ok" });
});

// Send email endpoint
app.post("/make-server-6cf48fbc/send-email", async (c) => {
  try {
    const { name, email, topics } = await c.req.json();
    
    // Validate input
    if (!name || !email) {
      return c.json({ error: "Name and email are required" }, 400);
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY not found in environment");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Format topics for email
    const topicsText = topics && topics.length > 0 
      ? topics.join(", ") 
      : "No topics selected";

    // Compose email HTML
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Topics of Interest:</strong> ${topicsText}</p>
    `;

    // Send email via Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Contact Form <noreply@form.machsyn.com>",
        to: ["info@dcvloeren.nl"],
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(`Error sending email via Resend: ${JSON.stringify(data)}`);
      return c.json({ error: "Failed to send email", details: data }, response.status);
    }

    console.log(`Email sent successfully: ${JSON.stringify(data)}`);
    return c.json({ success: true, messageId: data.id });

  } catch (error) {
    console.log(`Error in send-email endpoint: ${error}`);
    return c.json({ error: "Internal server error", message: String(error) }, 500);
  }
});

Deno.serve(app.fetch);