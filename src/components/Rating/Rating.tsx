import React from "react";

type RatingProps = {
    value: number
}

function Rating(props: RatingProps) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    )

}

function Star(props: any) {
    console.log('Star rendering')
    if(props.selected === true){
        return (
            <span><b>Star</b> </span>
        );
    }else {
        return (
            <span>Star </span>
        );
    }
}

export default Rating