"use client"

<<<<<<< HEAD
=======
import "../common/styles/themedBg.css";
import "../common/styles/themedBorder.css";
import "../styles/hero.css";
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
import ExperienceCard from "../components/experienceCard";
import NavBar from "../components/navbar";
import Heading from "../components/heading";
import Hero from "../components/hero";
import EducationCard from "../components/educationCard";
<<<<<<< HEAD
import Footer from "../components/footer";
import {
    fetchEducationData,
    fetchExperienceData,
} from "../utils/services/dataServices";
=======
import ContactForm from "../components/contactForm";
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517


function HomeScreen() {

    return (
        <div>
            <NavBar />
            {/* <VerticalSocialBar /> */}
            <Hero />
            <Heading label="Experience" />
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {fetchExperienceData().map((exp, index) => (
                    <ExperienceCard key={index} experience={exp} />
                ))}
            </div>
            <Heading label="Education" />
            <div
                className="container"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {fetchEducationData().map((exp, index) => (
                    <EducationCard key={index} education={exp} />
                ))}
            </div>
<<<<<<< HEAD
            <Footer />
=======
            <ContactForm />
>>>>>>> 939201429fc14d3bd0a38198750af7dbfdcfd517
        </div>
    );
}

export default HomeScreen;
