import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend("re_gUD4x6mu_PPgK9P83V533rrVJn9KmrNRS");

interface SendEmailParams {
  to: string;
  subject: string;
  text: string; // html
}

export async function sendEmail({ to, subject, text }: SendEmailParams) {
  await resend.emails.send({
    from: "onboarding@resend.dev", // no-reply@furniture.com
    to,
    subject,
    text,
  });
}
