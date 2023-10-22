import React from "react";

type ItemType = {
    title: string
    value: any
}

type Accordion = {
    titleValue: string,
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}
function Accordion(props: Accordion) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onChange} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitle = {
    title: string
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
function AccordionTitle(props: AccordionTitle) {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.onClick(props.collapsed)}>{props.title}</h3>
    )
}

type AccordionBody = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBody) {
    console.log('AccordionBody rendering')
    return (
        <ul>
            {props.items.map((el, index) => <li key={index} onClick={() => props.onClick(el.value)}>{el.title}</li>)}
        </ul>
    )
}

export default Accordion