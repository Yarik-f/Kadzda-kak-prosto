import React, {useState} from 'react';
import './OnOff.css'


const OnOff = () => {
    const [on, setOn] = useState(false)

    return (
        <div className={'onoff'}>
            <div onClick={() => {
                setOn(true)
            }} style={{backgroundColor: on ? 'green' : 'white'}}>On
            </div>
            <div onClick={() => {
                setOn(false)
            }} style={{backgroundColor: on ? 'white' : 'red'}}>Off
            </div>
            <span style={{backgroundColor: on ? 'green' : 'red'}}></span>
        </div>
    )
};
export default OnOff;