import "../styles/general.css"

function General({ generalInfo, setGeneralInfo }) {

    function handleChange(e) {
        setGeneralInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }));
    }

    return (
        <div className="general-info">
            <div className="general-element">
                <label htmlFor="user-name">Name:</label>
                <input type="text" id="user-name" name="name"
                 value={generalInfo.name} onChange={handleChange}
                 />
            </div>
            
            <div className="general-element">
                <label htmlFor="user-email">Email:</label>
                <input type="email" id="user-email" name="email" value={generalInfo.email} onChange={handleChange} />
            </div>
            
            <div className="general-element">
                <label htmlFor="phone-num">Phone Number:</label>
                <input type="number" id="phone-num" name="phone" value={generalInfo.phone} onChange={handleChange} />
            </div>
        </div>
    )
}

export default General;