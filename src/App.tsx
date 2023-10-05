import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";


function App() {


    console.log('App rendering')
    return (
        <div>
            {/*<PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'List'} collapsed={false}/>*/}

            <UnControlledAccordion titleValue={'Menu'}/>
            <UnControlledAccordion titleValue={'List'}/>
            Article 2
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            <Rating/>
            {/*<OnOff/>*/}
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
