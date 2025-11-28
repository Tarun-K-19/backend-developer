import '../styles/heading.css';

function Heading(props) {
    return (
        <div className="section-heading">
            <h2 className="wavy-text">{props.label}</h2>
            <div className="wavy-line"></div>
        </div>
    );
}

export default Heading;