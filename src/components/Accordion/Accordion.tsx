import React from "react";

type Accordion = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props: Accordion) {
    console.log('Accordion rendering')

    if (props.collapsed === true){
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody/>
        </div>
    )
}


type AccordionTitle = {
    title: string
}
function AccordionTitle(props: AccordionTitle) {
    console.log('AccordionTitle rendering')
    return (
        <h3>{props.title}</h3>
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