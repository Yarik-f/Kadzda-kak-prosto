import {action} from '@storybook/addon-actions';

import {useState} from "react";
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select,
};

export const MySelect = () => {
    const [collapsed, setCollapsed] = useState(false)
    const [select, setSelect] = useState('')

    return (
        <Select
            items={
                [
                    {
                        title: 'Moscow',
                        value: 1
                    },
                    {
                        title: 'Minsk',
                        value: 2
                    },
                    {
                        title: 'Shchuchyn',
                        value: 3
                    }
                ]
            }
            select={select}
            collapsed={collapsed}
            setSelect={setSelect}
            setCollapsed={setCollapsed}
        />
    )


}
