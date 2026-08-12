import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO     = process.env.CONTACT_TO_EMAIL ?? ''

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from:    'Portfolio <onboarding@resend.dev>',
      to:      [TO],
      replyTo: email,
      subject: `Nuevo contacto: ${name}`,
      text:    `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html:    `
        <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
          <p style="font-size:13px;color:#888;margin-bottom:24px">Mensaje desde tu portfolio</p>
          <h2 style="margin:0 0 4px;font-size:20px">${name}</h2>
          <p style="margin:0 0 24px;font-size:14px;color:#555">${email}</p>
          <p style="font-size:16px;line-height:1.6;white-space:pre-wrap">${message}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error al enviar' }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
