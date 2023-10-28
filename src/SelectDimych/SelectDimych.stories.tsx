import {action} from '@storybook/addon-actions';

import {SelectDimych} from "./SelectDimych";
import {useState} from "react";


export default {
    title: 'SelectDimych',
    component: SelectDimych,
};

export const WithValue = () => {

    const [value, setValue] = useState('2')
    return <>
        <SelectDimych
            items={
                [
                    {
                        title: 'Moscow',
                        value: '1'
                    },
                    {
                        title: 'Minsk',
                        value: '2'
                    },
                    {
                        title: 'Shchuchyn',
                        value: '3'
                    }
                ]
            }
            onChange={setValue}
            value={value}
        />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return < >
        < SelectDimych
            items={
                [
                    {
                        title: 'Moscow',
                        value: '1'
                    },
                    {
                        title: 'Minsk',
                        value:
                            '2'
                    }
                    ,
                    {
                        title: 'Shchuchyn',
                        value:
                            '3'
                    }
                ]
            }
            onChange={setValue}
            value={value}
        />
    </>
}
