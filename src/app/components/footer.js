"use client";
import React, { useState } from "react";
import "../styles/footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/yourusername" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
        { icon: <FaInstagram />, url: "https://instagram.com/yourusername" },
    ];

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
        <footer className="footer">
            <div className="footer-divider"></div>

            <h3 className="footer-title">
                Tarun K · Backend Developer (Kotlin + Spring Boot)
            </h3>

            <div className="footer-flex-container">
                <nav className="footer-links">
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/experience">Experience</a>
                    <a href="/contact">Contact</a>
                    <a href="/resume" target="_blank">
                        Resume
                    </a>
                </nav>
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
            </div>
            <div className="social-icons">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        {link.icon}
                    </a>
                ))}
            </div>

            <p className="built-using">
                Built using Next.js · React
            </p>

            <p className="footer-copy">
                © {new Date().getFullYear()} Tarun K. All rights reserved.
            </p>
        </footer>
    );
}
