import "../styles/experience.css";
import "../common/styles/themedBorder.css";

function ExperienceCard(props) {
    const experience = props.experience;

    return (
        <div className="experience-card animated-border-box">
            <div className="experience-header">
                <h3 className="role">{experience.role}</h3>
                <span className="period">
                    {experience.from.month} {experience.from.year} - {experience.to ? `${experience.to.month} ${experience.to.year}` : "Present"}
                </span>
            </div>
            <div className="company-location">
                {experience.company} — {experience.location.city}, {experience.location.state}, {experience.location.country}
            </div>
            <p className="description">{experience.description}</p>
            {experience.points && experience.points.length > 0 && (
                <ul className="points">
                    {experience.points.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
            )}
            {experience.techStack && experience.techStack.length > 0 && (
                <div className="tech-stack">
                    {experience.techStack.map((tech, i) => (
                        <span key={i} className="tech">{tech}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

export default ExperienceCard;
