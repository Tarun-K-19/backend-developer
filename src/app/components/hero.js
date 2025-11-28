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

                <Profile />
            </div>
        </div>
    );
}

export default Hero;