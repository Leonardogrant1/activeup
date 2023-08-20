import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "leonardogranetto.business@gmail.com",
      pass: "tyyuujoukbcwmxin",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "leonardogranetto.business@gmail.com",
      replyTo: email,
      subject: "Neue Anfrage! ActiveNow Media",
      html: `
        <h4>Name: ${name} </h4>
        <h4>Email: ${email} </h4>
        <p>Message: ${message} </p>
        `,
    });

    return new Response("OK", { status: 200 });
  } catch (e) {
    console.log(e);

    return new Response(
      "Could not send the email. Your message was not sent.",
      { status: 500 }
    );
  }
}
