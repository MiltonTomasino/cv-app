import "../styles/display.css";

function Display({ generalInfo, education, experience }) {
    return (
        <div className="display">
            <div className="display-header">
                <h1>{generalInfo.name}</h1>
                <div className="sub-info">
                    <h2>{generalInfo.email}</h2>
                    <h2>{generalInfo.phone}</h2>
                </div>
            </div>

            <div className="display-education">
                <h2>{education.school}</h2>
                <div className="sub-info">
                    <h2>{education.major}</h2>
                    <h2>{education.date}</h2>
                </div>
            </div>

            <div className="display-exp">
                <h2>{experience.compName}</h2>
                <h2>{experience.posTitle}</h2>
                <h2>{experience.responsabilities}</h2>
                <h2>{experience.startDate}</h2>
                <h2>{experience.endDate}</h2>
            </div>
        </div>
    )
}

export default Display;