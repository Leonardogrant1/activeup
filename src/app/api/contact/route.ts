import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

import { FacebookConversionsAPI } from "../../../../fb_conversions_api";

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: "info@activeupmedia.com",
      pass: "qerffcfpnbasjjro",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "info@activeupmedia.com",
      replyTo: email,
      subject: "Neue Anfrage! ActiveUp Media",
      html: `
        <h4>Name: ${name} </h4>
        <h4>Email: ${email} </h4>
        <p>Message: ${message} </p>
        `,
    });

    await FacebookConversionsAPI.triggerContactEvent(
      name,
      name,
      email,
      phone,
      request
    );
    return new Response("OK", { status: 200 });
  } catch (e) {
    console.log(JSON.stringify(e));

    return new Response(
      "Could not send the email. Your message was not sent.",
      { status: 500 }
    );
  }
}
