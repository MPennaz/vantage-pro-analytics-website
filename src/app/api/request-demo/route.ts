// src/app/api/request-demo/route.ts

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const name = String(body?.name ?? "").trim()
    const email = String(body?.email ?? "").trim()
    const company = String(body?.company ?? "").trim()
    const role = String(body?.role ?? "").trim()
    const plants = String(body?.plants ?? "").trim()
    const goals = String(body?.goals ?? "").trim()
    const timeline = String(body?.timeline ?? "").trim()

    if (!name || !email || !company || !goals) {
      return NextResponse.json(
        { error: "Name, email, company, and goals are required." },
        { status: 400 },
      )
    }

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
        <h2 style="margin: 0 0 12px 0;">New demo request</h2>

        <p style="margin: 0 0 6px 0;"><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p style="margin: 0 0 6px 0;"><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p style="margin: 0 0 6px 0;"><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p style="margin: 0 0 6px 0;"><strong>Role / title:</strong> ${escapeHtml(role || "-")}</p>
        <p style="margin: 0 0 6px 0;"><strong>Plants / sites:</strong> ${escapeHtml(plants || "-")}</p>
        <p style="margin: 0 0 6px 0;"><strong>Timeline:</strong> ${escapeHtml(timeline || "Just exploring")}</p>

        <hr style="margin: 16px 0; border: none; border-top: 1px solid #333;" />

        <p style="margin: 0 0 8px 0;"><strong>Focus for the demo:</strong></p>
        <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(goals)}</p>
      </div>
    `

    await resend.emails.send({
      from: "Vantage Pro Analytics <info@vantageproanalytics.com>",
      to: ["info@vantageproanalytics.com"],
      replyTo: email,
      subject: `[Demo Request] ${company} – ${name}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("request-demo route error:", err)
    return NextResponse.json(
      { error: "Server error sending demo request." },
      { status: 500 },
    )
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}
