import { action } from '@storybook/addon-actions';
import React, {useRef, useState} from "react";



export default  {
    title: 'Input'
    //component: Accordion,
};

export const unControlledInput = () => <input type="text"/>
export const UnControlledInputTrcakedValue = () =>{
    const [value, setValue] = useState('')
    return <>
        <input onChange={event => {
            const actualValue = event.currentTarget.value
            setValue(actualValue)
        }}/>
         - {value}
        </>
}
export const GetUnControlledInputTrcakedValue = () =>{
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        - actual value: {value}
        </>
}

export const ControlledInput = () =>{
    const [value, setValue] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <input value={value} onChange={onChange}/>
}
export const ControlledCheckBox = () => {
    const [value, setValue] = useState(true)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }

    return <input type={'checkbox'} checked={value} onChange={onChange}/>
}
export const ControlledSelect = () => {
    const [value, setValue] = useState<string | undefined>('2')
    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
       setValue(e.currentTarget.value)
    }

    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Piter</option>
    </select>
}


export const ControlledInputWithFixedValue = () => <input value={'Yarik'}/>
