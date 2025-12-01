"use client"

import ExperienceCard from "../components/experienceCard";
import NavBar from "../components/navbar";
import Heading from "../components/heading";
import Hero from "../components/hero";
import EducationCard from "../components/educationCard";
import Footer from "../components/footer";
import {
    fetchEducationData,
    fetchExperienceData,
} from "../common/services/dataServices";


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
            <Footer />
        </div>
    );
}

export default HomeScreen;
