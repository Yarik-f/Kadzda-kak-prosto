import React from "react";
import {ClockViewType, getDigitsString} from "./Clock";

export const DigitalClockView: React.FC<ClockViewType> = (props) => {
    return (
        <div>
            <span>{getDigitsString(props.date.getHours())}</span>
            :
            <span>{getDigitsString(props.date.getMinutes())}</span>
            :
            <span>{getDigitsString(props.date.getSeconds())}</span>
        </div>
    )
}