"use client"
import React, { useState } from "react";
import '../styles/contactForm.css';

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("Sending...");

        const res = await fetch("/api/send-mail", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        

        const result = await res.json();

        if (result.success) {
            setStatus("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send message.");
        }
    }

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                />

                <input
                    name="email"
                    placeholder="Your Email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Send</button>
            </form>

            {status && <p className="status">{status}</p>}
        </div>
    );
}
