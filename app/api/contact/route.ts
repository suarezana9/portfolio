import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Faltan campos' }, { status: 400 })
    }

    // TODO: conectar Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'portfolio@anasuarez.dev',
    //   to:   'ana@anasuarez.dev',
    //   subject: `Nuevo contacto de ${name}`,
    //   text: `De: ${name} <${email}>\n\n${message}`,
    // })

    console.log('Contacto recibido:', { name, email, message })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
