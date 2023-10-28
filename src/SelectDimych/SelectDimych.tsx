import React, {useEffect, useState} from 'react';
import s from './SelectDimych.module.css'
import {Simulate} from "react-dom/test-utils";
import keyDown = Simulate.keyDown;

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export const SelectDimych = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.value)

    useEffect(() => {
        setHover(props.value)
    }, [props.value])

    const showItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value)
        showItems()
        setHover(value)
    }


    const SelectedItems = props.items.find(i => i.value === props.value)
    const HoveredItems = props.items.find(i => i.value === hover)

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i] === HoveredItems) {
                    const element = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (element) {
                        props.onChange(element.value)
                        return
                    }

                }
            }
            if (!SelectedItems) {
                props.onChange(props.items[0].value)
            }

        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    /*const activeClass = `
    ${s.select}
    ${active ? s.active : s.select}
    `*/

    return (
        <>
            <div className={s.select} tabIndex={0} onKeyDown={onKeyDown}>
                {/*<select name="" id="">
                    <option value="">sfdfsd</option>
                    <option value="">vcxvxcv</option>
                    <option value="">pppppp</option>
                    <option value="">mmmmmm</option>
                    <option value="">qqqqqq</option>
                </select>*/}
                <span className={s.main} onClick={showItems}>{SelectedItems && SelectedItems.title}</span>

                {active &&
                    <div className={s.items}>
                        {props.items.map(el => <div
                            onMouseEnter={() => setHover(el.value)}
                            className={s.item + ' ' + (HoveredItems === el ? s.selected : '')}
                            key={el.value}
                            onClick={() => {
                                onItemClick(el.value)
                            }}
                        >{el.title}</div>)}
                    </div>
                }


            </div>
        </>

    );
};
