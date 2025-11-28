import "../styles/education.css";
import "../common/styles/themedBorder.css";

function EducationCard(props) {
    const education = props.education;

    return (
        <div className="education-card animated-border-box">
            <div className="education-header">
                <h3 className="degree">{education.degree}</h3>
                <span className="period">
                    {education.from.month} {education.from.year} - {education.to ? `${education.to.month} ${education.to.year}` : "Present"}
                </span>
            </div>

            <div className="college-location">
                {education.college} — {education.location.city}, {education.location.state}, {education.location.country}
            </div>

            <p className="field-of-study">{education.fieldOfStudy}</p>
        </div>
    );
}

export default EducationCard;