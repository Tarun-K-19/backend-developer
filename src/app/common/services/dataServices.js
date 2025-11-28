import { education } from "../data/education";
import { experiences } from "../data/experiences";

export function fetchExperienceData() {
    try {
        return experiences;
    } catch (error) {
        console.error("Failed to fetch experience data:", error);
        return [];
    }
}

export function fetchEducationData() {
    try {
        return education;
    } catch (error) {
        console.error("Failed to fetch education data:", error);
        return [];
    }
}