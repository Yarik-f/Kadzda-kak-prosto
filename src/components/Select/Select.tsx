import React from 'react';


type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    items: ItemType[]
    select: string
    collapsed: boolean
    setSelect: (select: string) => void
    setCollapsed: (collapsed: boolean) => void
}
export const Select = (props: SelectPropsType) => {


    return (
        <div>
            <h2 onClick={() => props.setCollapsed(!props.collapsed)} style={{cursor: "pointer"}}>
                {
                    props.collapsed
                        ? `${props.select === '' ? 'Select' : props.select} ▲`
                        : `${props.select ? props.select : 'Select'}  ▼`
                }
            </h2>
            {
                props.collapsed
                    ? props.items.map(el => {
                        const setSelectHandler = () => {
                            props.setSelect(el.title)
                            props.setCollapsed(false)
                        }
                        return (
                            <h3 key={el.value} onClick={setSelectHandler}>{el.title}</h3>
                        )
                    })
                    : <div></div>
            }

        </div>
    );
};
