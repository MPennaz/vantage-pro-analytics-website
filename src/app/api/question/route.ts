// src/app/api/question/route.ts

import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const subject = String(body?.subject ?? "Website question")
    const name = String(body?.name ?? "").trim()
    const email = String(body?.email ?? "").trim()
    const company = String(body?.company ?? "").trim()
    const question = String(body?.question ?? "").trim()

    if (!email || !question) {
      return NextResponse.json(
        { error: "Email and question are required." },
        { status: 400 },
      )
    }

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
        <h2 style="margin: 0 0 12px 0;">New website question</h2>
        <p style="margin: 0 0 6px 0;"><strong>From:</strong> ${escapeHtml(
          name || "Unknown",
        )}</p>
        <p style="margin: 0 0 6px 0;"><strong>Email:</strong> ${escapeHtml(
          email,
        )}</p>
        <p style="margin: 0 0 6px 0;"><strong>Company:</strong> ${escapeHtml(
          company || "-",
        )}</p>
        <hr style="margin: 16px 0; border: none; border-top: 1px solid #333;" />
        <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(question)}</p>
      </div>
    `

    await resend.emails.send({
      // Use whatever "from" domain you already used in beta-signup
      from: "Vantage Pro Analytics <info@vantageproanalytics.com>",
      to: ["info@vantageproanalytics.com"],
      replyTo: email,
      subject: `[Question] ${subject}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Question route error:", err)
    return NextResponse.json(
      { error: "Server error sending message." },
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
