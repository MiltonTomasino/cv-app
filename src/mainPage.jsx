import { useState } from 'react';
import "./styles/mainPage.css";
import General from "./compontents/general";
import Display from './compontents/displayInfo';
import Education from './compontents/education';
import Experience from './compontents/experience';

function MainPage() {

    let [ generalInfo, setGeneralInfo ] = useState({
        name: '',
        email: '',
        phone: ''
    });

    let [education, setEducation] = useState({
        shool: '',
        major: '',
        date: '',
    })

    let [experience, setExperience] = useState({
        compName: '',
        posTitle: '',
        responsabilities: '',
        startDate: '',
        endDate: ''
    })

    console.log(generalInfo.name, generalInfo.email, generalInfo.phone);
    

    return (
        <div className='grid-container'>

            <div className="grid-form">
                <General
                setGeneralInfo={setGeneralInfo}
                />

                <Education 
                setEducation={setEducation}
                />

                <Experience
                setExperience={setExperience}
                />

            </div>

            <Display
            generalInfo={generalInfo}
            education={education}
            experience={experience}
            />
        
         
        </div>
    )
}

export default MainPage;