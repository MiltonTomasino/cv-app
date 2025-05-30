import { useState } from 'react';
import "./styles/mainPage.css";
import General from "./compontents/general";
import Display from './compontents/displayInfo';

function MainPage() {

    let [ generalInfo, setGeneralInfo ] = useState({
        name: '',
        email: '',
        phone: 0
    });

    console.log(generalInfo.name, generalInfo.email, generalInfo.phone);
    

    return (
        <div className='grid-container'>

            <div className="grid-form">
                <General
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
                />
            </div>

            <Display generalInfo={generalInfo} />
        
         
        </div>
    )
}

export default MainPage;