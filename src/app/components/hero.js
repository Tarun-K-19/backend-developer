import { Palette1 } from "../common/colors";
import Profile from "./profilePhoto";
import TypingEffect from "./typingEffect";
import "../styles/hero.css";
import { fetchHeroInfo } from "../common/services/dataServices";

function Hero() {
    const info = fetchHeroInfo();

    return (
        <div className="hero-bg">
            <div className="hero-section">
                <div className="hero-text-section">
                    <TypingEffect words={info.info} />
                    <p className="blended-text">{info.description}</p>
                </div>
                <Profile />
            </div>
        </div>
    );
}

export default Hero;
