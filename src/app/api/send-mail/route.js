
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        const response = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
<<<<<<< HEAD
            to: process.env.ADMIN_EMAIL,
=======
            to: "prj284@iitpkd.ac.in",
            cc: [email],
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
            subject: `New Message from ${name}`,
            html: `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p>${message}</p>
            `,
        });

        return Response.json({ success: true, response });
    } catch (error) {
        return Response.json({ success: false, error: error.message }, { status: 500 });
    }
}