import "../styles/display.css";

function Display({ generalInfo }) {
    return (
        <div className="display">
            <div className="display-header">
                <h1>{generalInfo.name}</h1>
                <div className="sub-info">
                    <h2>{generalInfo.email}</h2>
                    <h2>{generalInfo.phone}</h2>
                </div>
            </div>
        </div>
    )
}

export default Display;