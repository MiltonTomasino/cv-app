import "../styles/general.css"
import { useState } from 'react';

function General({ setGeneralInfo, generalInfo }) {
    const [localInfo, setLocalInfo] = useState({
        name: '',
        email: '',
        phone: ''
    })

    function handleChange(e) {
        setLocalInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }));
    }

    function submitInfo(e) {
        e.preventDefault();
        setGeneralInfo(localInfo);
        setLocalInfo({
            name: '',
            email: '',
            phone: ''
        })
    }

    function edit(e) {
        e.preventDefault();
        setLocalInfo(generalInfo);
    }

    return (
        <div className="general-info">
            <form action="">
                <legend><h1>Personal Information</h1></legend>
                <div className="general-element">
                    <label htmlFor="user-name">Name:</label>
                    <input type="text" id="user-name" name="name"
                     value={localInfo.name} onChange={handleChange}
                     />
                </div>
                
                <div className="general-element">
                    <label htmlFor="user-email">Email:</label>
                    <input type="email" id="user-email" name="email" value={localInfo.email} onChange={handleChange} />
                </div>
                
                <div className="general-element">
                    <label htmlFor="phone-num">Phone Number:</label>
                    <input type="number" id="phone-num" name="phone" value={localInfo.phone} onChange={handleChange} />
                </div>
                <div className="form-btns">
                    <button onClick={submitInfo}>Submit</button>
                    <button onClick={edit}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default General;