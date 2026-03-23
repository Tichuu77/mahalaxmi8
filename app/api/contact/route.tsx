import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("📩 Contact form received:", body)

    const payload = {
      access_key: "9bd84126-c6f8-4d7d-abc9-785c58560bb4",
      name: body.name,
      subject: body.subject,
      message: body.message,
    }
    console.log("📤 Sending to web3forms:", payload)

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    })

    const text = await res.text()
    console.log("📥 web3forms raw response:", text)

    let data: { success?: boolean; message?: string } = {}
    try {
      data = JSON.parse(text)
    } catch {
      console.error("❌ Failed to parse web3forms response as JSON:", text)
      return NextResponse.json(
        { success: false, error: "Invalid response from mail provider" },
        { status: 502 }
      )
    }

    if (data.success) {
      console.log("✅ web3forms success")
      return NextResponse.json({ success: true })
    }

    console.error("❌ web3forms returned failure:", data)
    return NextResponse.json(
      { success: false, error: data.message ?? "Submission failed" },
      { status: 400 }
    )
  } catch (err) {
    console.error("❌ Contact route exception:", err)
    return NextResponse.json(
      { success: false, error: String(err) },
      { status: 500 }
    )
  }
}