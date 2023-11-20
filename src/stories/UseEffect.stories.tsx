import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect'
}

export const HelpToUseEffect = () => {

    console.log('HelpToUseEffect')

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        document.title = counter.toString()
        console.log('UseEffect every render')
    })
    useEffect(() => {
        document.title = counter.toString()
        console.log('UseEffect only first render')
    }, [])
    useEffect(() => {
        document.title = counter.toString()
        console.log('UseEffect only changed counter')
    }, [counter])

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            {counter}
        </>
    )
}
export const SetTimeoutExample = () => {

    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)

    useEffect(() => {
        setInterval(() => {
            console.log('setTimeout')
            setCounter(state => state + 1)
        }, 1000)
    }, []);

    return (
        <>
            counter: {counter}
            {/*<button onClick={() => setCounter(counter + 1)}>counter</button>
            <button onClick={() => setFake(fake + 1)}>fake</button>*/}
            fake: {fake}
        </>
    )
}
