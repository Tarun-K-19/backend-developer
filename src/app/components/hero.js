import { Palette1 } from "../common/colors";
import Profile from "./profilePhoto";
import TypingEffect from "./typingEffect";
import "../styles/hero.css";

function Hero() {
    return (
        <div className="hero-bg">
            <div className="hero-section">
                <div className="hero-text-section">
                    <TypingEffect words="Hey..! I'm Tarun K" />
                    <p className="blended-text">
                        The result driven backend developer
                    </p>
                </div>
                <Profile />
            </div>
        </div>
    );
}

export default Hero;
