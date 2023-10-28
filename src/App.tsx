import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {Select} from "./components/Select/Select";
import {SelectDimych} from "./SelectDimych/SelectDimych";


function App() {

    const [collapsed, setCollapsed] = useState(false)
    const [on, setOn] = useState(false)
    const [select, setSelect] = useState('')

    console.log('App rendering')
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={collapsed} onClick={setCollapsed} items={
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
                ]
            }/>*/}

            {/*<UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'List'}/>*/}
          {/*  Article 2
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <OnOff on={on} onChange={() => setOn(!on)}/>*/}
            <Select items={
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
                ]
            }
                    select={select}
                    setSelect={setSelect}
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
            />
            <SelectDimych
                onChange={() => {}}
              items={[
                {
                    title: 'yarik',
                    value: '1'
                },
                {
                    title: 'vadim',
                    value: '2'
                },
                {
                    title: 'egor',
                    value: '3'
                }
            ]}
            />
        </div>
    );
}

type PageTitle = {
    title: string
}

function PageTitle(props: PageTitle) {
    console.log('PageTitle rendering')
    return (
        <h1>
            {props.title}
        </h1>
    )
}


export default App;
