import { useState } from 'react';
import "../styles/experience.css"

function Experience({ setExperience, experience }) {

    let [localInfo, setLocalInfo] = useState({
        compName: '',
        posTitle: '',
        responsabilities: '',
        startDate: '',
        endDate: ''
    })

    function submitInfo(e) {
        e.preventDefault();
        setExperience(localInfo)
        setLocalInfo({
            compName: '',
            posTitle: '',
            responsabilities: '',
            startDate: '',
            endDate: ''
        })
    }

    function handleChange(e) {
        setLocalInfo(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }))
    }

    function edit(e) {
        e.preventDefault();
        setLocalInfo(experience);
    }

    return (
        <div className="exp-container">

            <form action="">
                <legend><h1>Work Experience</h1></legend>
                <div className="grid-element">
                    <label htmlFor="compName">Company Name:</label>
                    <input type="text" name='compName' id='compName' value={localInfo.compName} onChange={handleChange}/>
                </div>
                <div className="grid-element">
                    <label htmlFor="posTitle">Position Title:</label>
                    <input type="text" name='posTitle' id='posTitle' value={localInfo.posTitle} onChange={handleChange}/>
                </div>
                <div className="grid-element">
                    <label htmlFor="responsabilities">Main Responsibilities:</label>
                    <textarea name="responsabilities" id="responsabilities" value={localInfo.responsabilities} onChange={handleChange}></textarea>
                </div>
                <div className="grid-element">
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" name="startDate" id="startDate" value={localInfo.startDate} onChange={handleChange}/>
                </div>
                <div className="grid-element">
                    <label htmlFor="endDate">End Date:</label>
                    <input type="date" name="endDate" id="endDate" value={localInfo.endDate} onChange={handleChange}/>
                </div>

                <div className="form-btns">
                    <button onClick={submitInfo}>Submit</button>
                    <button onClick={edit}>Edit</button>
                </div>
            </form>

        </div>
    )
}


export default Experience;