import React from "react";

type Accordion = {
    titleValue: string,
    collapsed: boolean
    onClick: (collapsed: boolean) => void
}
function Accordion(props: Accordion) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={!props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
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

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion