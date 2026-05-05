import { Resend } from 'resend';

const resend = new Resend('re_jUdDvDok_DJybHNdTwg4eRWkuUkxvrR9N');

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();
    const name = `${firstName} ${lastName}`;

    const { data, error } = await resend.batch.send([
      // Email 1: Notification to the team
      {
        from: 'website@gruha.ai',
        to: 'website@gruha.ai',
        subject: `New enquiry from ${name}`,
        html: `
          <h2>New enquiry — Gruha.ai</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || 'New Waitlist Request'}</p>
        `,
      },
      // Email 2: Confirmation to the lead
      {
        from: 'website@gruha.ai',
        to: email,
        replyTo: 'hello@gruha.ai',
        subject: "We've received your enquiry",
        html: `
          <p>Hi ${firstName},</p>
          <p>
            Thank you for reaching out to Gruha.ai. We've received your
            enquiry and will get back to you within 1 business day.
          </p>
          <p>Here's a copy of what you sent us:</p>
          <blockquote style="border-left:3px solid #ccc; padding-left:12px; color:#555">
            ${message || 'New Waitlist Request'}
          </blockquote>
          <p>Feel free to reply to this email if you have anything to add.</p>
          <p>— Team Gruha.ai</p>
        `,
      },
    ]);

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ error: (error as Error).message }, { status: 500 });
  }
}
