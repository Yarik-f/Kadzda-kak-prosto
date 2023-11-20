import React, {useEffect, useState} from "react";

type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const getDigitsString = (num: number) => {
        return num < 10
            ? '0' + num
            : num
    }


    return (
        <div>
            <span>{getDigitsString(date.getHours())}</span>
            :
            <span>{getDigitsString(date.getMinutes())}</span>
            :
            <span>{getDigitsString(date.getSeconds())}</span>
        </div>
    )
}