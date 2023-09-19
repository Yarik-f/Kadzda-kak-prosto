import React from 'react';
import './OnOff.css'

type OnOffType = {
    color: boolean
}
type OnOffBodyType = {
    bgOn: string
    bgOff: string
    span: boolean
}

const OnOff = (props: OnOffType) => {
    return (
        <div>
            {!props.color && <OnOffBody bgOn={'none'} bgOff={'red'} span={true}/>}
            {props.color && <OnOffBody bgOn={'green'} bgOff={'none'} span={false}/>}
        </div>
    );
};

function OnOffBody(props: OnOffBodyType) {
    return (
        <div  className={'onoff'}>
            <div style={{backgroundColor: props.bgOn}}>On</div>
            <div style={{backgroundColor: props.bgOff}}>Off</div>
            {!props.span && <span style={{backgroundColor: props.bgOn}}></span>}
            {props.span && <span style={{backgroundColor: props.bgOff}}></span>}
        </div>
    )
}

export default OnOff;