import { action } from '@storybook/addon-actions';


import  OnOff  from './OnOff';
import {useState} from "react";
import {StoryObj} from "@storybook/react";

export default  {
    component: OnOff,
};

const callback =  action('clicked')
export const On = () => <OnOff on={true} onChange={callback}/>
export const Off = () => <OnOff on={false} onChange={callback}/>

type Story = StoryObj<typeof OnOff>;

export const OnOffChange: Story = {
    args: {
        on: true,
        onChange: callback
    },
};
export const Change = () => {
    const [on, setOn] = useState<boolean>(true)
    return <OnOff on={on} onChange={() => setOn(!on)}/>
}
