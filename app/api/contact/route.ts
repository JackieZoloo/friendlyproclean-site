import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { company, name, email, phone, message } = body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"FriendlyProClean Website" <${process.env.EMAIL_USER}>`,
      to: "contact@friendlyproclean.com",
      subject: "New Walkthrough Request",
      html: `
        <h2>New Walkthrough Request</h2>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Contact Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Details:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error })
  }
}