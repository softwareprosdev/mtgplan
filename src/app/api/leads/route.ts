import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

async function sendEmailNotification(lead: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  const notificationEmail = process.env.NOTIFICATION_EMAIL;

  if (!apiKey || !notificationEmail) {
    return;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const name = lead.name as string;

    await resend.emails.send({
      from: "MTGPlan Leads <onboarding@resend.dev>",
      to: notificationEmail,
      subject: `New Quote/Contact Lead: ${name}`,
      html: `
        <h2>New Lead Submitted</h2>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
          <tr><th align="left">Field</th><th align="left">Value</th></tr>
          <tr><td><strong>Name</strong></td><td>${lead.name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${lead.email}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${lead.phone}</td></tr>
          <tr><td><strong>Type</strong></td><td>${lead.type}</td></tr>
          <tr><td><strong>Mortgage Balance</strong></td><td>${lead.mortgage ? `$${Number(lead.mortgage).toLocaleString()}` : "N/A"}</td></tr>
          <tr><td><strong>Age</strong></td><td>${lead.age ?? "N/A"}</td></tr>
          <tr><td><strong>Zip Code</strong></td><td>${lead.zip ?? "N/A"}</td></tr>
          <tr><td><strong>Estimate Range</strong></td><td>${lead.estimateLow && lead.estimateHigh ? `$${lead.estimateLow} – $${lead.estimateHigh}/mo` : "N/A"}</td></tr>
          <tr><td><strong>Submitted At</strong></td><td>${lead.createdAt}</td></tr>
          <tr><td><strong>ID</strong></td><td>${lead.id}</td></tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Failed to send lead notification email:", err);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const lead = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...body,
    };

    const dataDir = path.join(process.cwd(), "data");
    const leadsFile = path.join(dataDir, "leads.json");

    await fs.mkdir(dataDir, { recursive: true });

    let leads: unknown[] = [];
    try {
      const existing = await fs.readFile(leadsFile, "utf-8");
      leads = JSON.parse(existing);
    } catch {
      // File does not exist yet — start with empty array
      leads = [];
    }

    leads.push(lead);
    await fs.writeFile(leadsFile, JSON.stringify(leads, null, 2), "utf-8");

    // Fire-and-forget email notification
    sendEmailNotification(lead).catch(() => {});

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Failed to save lead:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
