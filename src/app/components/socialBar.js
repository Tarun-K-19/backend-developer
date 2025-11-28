import "../styles/socialBar.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function VerticalSocialBar() {
    const socialLinks = [
        { icon: <FaGithub />, url: "https://github.com/yourusername" },
        { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername" },
        { icon: <FaTwitter />, url: "https://twitter.com/yourusername" },
        { icon: <FaInstagram />, url: "https://instagram.com/yourusername" },
    ];

    return (
        <div className="vertical-social-bar">
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
            <div className="vertical-line"></div>
        </div>
    );
}
