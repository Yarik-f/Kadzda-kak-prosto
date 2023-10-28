import {action} from '@storybook/addon-actions';


import Accordion from './Accordion';
import {useState} from "react";

export default {
    component: Accordion,
};

export const AccordionToggle = () => {
    const [collapsed, setCollapsed] = useState(true)

    const onClick = () => {
        setCollapsed(!collapsed)
    }
    const callback = action('clicked')

    return <Accordion items={
        [
            {
                title: 'yarik',
                value: 1
            },
            {
                title: 'vadim',
                value: 2
            },
            {
                title: 'egor',
                value: 3
            }
        ]} titleValue={'hello'} collapsed={collapsed} onClick={onClick}/>
}
