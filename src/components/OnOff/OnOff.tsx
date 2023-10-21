import React, {useState} from 'react';
import './OnOff.css'

type onOff = {
    on: boolean
    onChange: (on: boolean) => void
}
const OnOff = (props: onOff) => {


    return (
        <div className={'onoff'}>
            <div onClick={() => {
                props.onChange(props.on)
            }} style={{backgroundColor: props.on ? 'green' : 'white'}}>On
            </div>
            <div onClick={() => {
                props.onChange(props.on)
            }} style={{backgroundColor: props.on ? 'white' : 'red'}}>Off
            </div>
            <span style={{backgroundColor: props.on ? 'green' : 'red'}}></span>
        </div>
    )
};
export default OnOff;