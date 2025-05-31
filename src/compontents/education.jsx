import { useState } from 'react';
import "../styles/education.css"

function Education({ setEducation }) {
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


    return (
        <div className="education-info">
            <form action="">
                <legend>Educational Experience</legend>

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

                <button onClick={submitInfo}>Submit</button>
            </form>
        </div>
    )
}

export default Education;