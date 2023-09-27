import React, {useState} from "react";

type UnControlledAccordion = {
    titleValue: string,
}
function UnControlledAccordion(props: UnControlledAccordion) {
    console.log('Accordion rendering')

    const [on, setOn] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setOn(!on)}}>Toggle</button>
            {!on && <AccordionBody/>}
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

export default UnControlledAccordion