
// src/app/api/beta-signup/route.ts
import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const runtime = "nodejs" // make sure this runs on the Node runtime

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const {
      fullName,
      email,
      company,
      role,
      manufacturingType,
      currentSystems,
      biggestPain,
      notes,
    } = body || {}

    // Basic validation
    if (
      !fullName ||
      !email ||
      !company ||
      !manufacturingType ||
      !biggestPain
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      )
    }

    const toAddress = process.env.BETA_NOTIFICATION_TO
    const fromAddress = process.env.BETA_NOTIFICATION_FROM

    if (!toAddress || !fromAddress) {
      console.error("Missing BETA_NOTIFICATION_TO or BETA_NOTIFICATION_FROM")
      return NextResponse.json(
        { error: "Email configuration is not set on the server" },
        { status: 500 },
      )
    }

    const subject = `New VPA Beta Request – ${company} (${fullName})`

    const lines = [
      "Vantage Pro Analytics – Beta Program Request",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role / Title: ${role || "—"}`,
      `Manufacturing Type: ${manufacturingType}`,
      `Current Systems (ERP / MES / QC / etc.): ${currentSystems || "—"}`,
      "",
      "Biggest operational pain point:",
      biggestPain,
      "",
      notes ? "Additional notes:\n" + notes : "",
    ]

    const textBody = lines.join("\n")

    const htmlBody = `
      <h2>Vantage Pro Analytics – Beta Program Request</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Role / Title:</strong> ${role || "—"}</p>
      <p><strong>Manufacturing Type:</strong> ${manufacturingType}</p>
      <p><strong>Current Systems (ERP / MES / QC / etc.):</strong> ${
        currentSystems || "—"
      }</p>
      <hr />
      <p><strong>Biggest operational pain point:</strong></p>
      <p>${biggestPain.replace(/\n/g, "<br />")}</p>
      ${
        notes
          ? `<hr /><p><strong>Additional notes:</strong></p><p>${notes.replace(
              /\n/g,
              "<br />",
            )}</p>`
          : ""
      }
    `.trim()

    const { error } = await resend.emails.send({
      from: fromAddress,          // e.g. "Vantage Pro Analytics <info@...>"
      to: [toAddress],            // e.g. "info@..."
      replyTo: email,             // so you can reply directly to the requester
      subject,
      text: textBody,
      html: htmlBody,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("beta-signup route error:", err)
    return NextResponse.json(
      { error: "Unexpected server error" },
      { status: 500 },
    )
  }
}
