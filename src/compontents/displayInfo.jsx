import "../styles/display.css";

function Display({ generalInfo }) {
    return (
        <div className="display">
            <h1>{generalInfo.name}</h1>
        </div>
    )
}

export default Display;