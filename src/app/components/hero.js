<<<<<<< HEAD
import { Palette1 } from "../utils/colors";
import Profile from "./profilePhoto";
import TypingEffect from "./typingEffect";
import "../styles/hero.css";
import { fetchHeroInfo } from "../utils/services/dataServices";

function Hero() {
    const info = fetchHeroInfo();

    return (
        <div className="hero-bg">
            <div className="hero-section">
                <div className="hero-text-section">
                    <TypingEffect words={info.info} />
                    <p className="blended-text">{info.description}</p>
                </div>
=======
import { Palette1 } from "../common/colors";
import Profile from "./profilePhoto";
import TypingEffect from "./typingEffect";

function Hero() {
    return (
        <div className="moving-section">
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "40px",
                    backgroundColor: Palette1,
                    flexWrap: "wrap",
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: "column",
                        width: "30%",
                        minHeight: "120px",
                        backgroundColor: Palette1,
                    }}
                >
                    <TypingEffect words="Hey..! I'm Tarun K" />
                    <p className="blended-text">
                        The result driven backend developer
                    </p>
                </div>

>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
                <Profile />
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default Hero;
=======
export default Hero;
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
