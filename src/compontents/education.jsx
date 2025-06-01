import { useState } from 'react';
import "../styles/education.css"

function Education({ setEducation, education }) {
    let [localEdu, setLocalEdu] = useState({
        school: '',
        major: '',
        date: '',
    })

    function handleChange(e) {
        setLocalEdu(prevInfo => ({
            ...prevInfo,
            [e.target.name]: e.target.value
        }))
    }

    function submitInfo(e) {
        e.preventDefault();
        setEducation(localEdu);
        setLocalEdu({
            school: '',
            major: '',
            date: ''
        })
    }

    function edit(e) {
        e.preventDefault();
        setLocalEdu(education);
    }


    return (
        <div className="education-info">
            <form action="">
                <legend><h1>Educational Experience</h1></legend>

                <div className="grid-element">
                    <label htmlFor="school">School:</label>
                    <input type="text" name="school" id="school" value={localEdu.school} onChange={handleChange}/>
                </div>

                <div className="grid-element">
                    <label htmlFor="major">Major:</label>
                    <input type="text" name="major" id="major" value={localEdu.major} onChange={handleChange}/>
                </div>

                <div className="grid-element">
                    <label htmlFor="date">Date:</label>
                    <input type="date" name="date" id="date" value={localEdu.date} onChange={handleChange}/>
                </div>

                <div className="form-btns">
                    <button onClick={submitInfo}>Submit</button>
                    <button onClick={edit}>Edit</button>
                </div>
            </form>
        </div>
    )
}

export default Education;