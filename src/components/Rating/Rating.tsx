import React, {FC, useState} from "react";

type RatingProps = {}

function Rating(props: RatingProps) {
    console.log('Rating rendering')

    const [value, setValue] = useState(0)

    const OnClickHandler = (num: number) => {
        setValue(num)
    }

    return (
        <div>
            <Star selected={value > 0} onClick={() => OnClickHandler(1)}/>
            <Star selected={value > 1} onClick={() => OnClickHandler(2)}/>
            <Star selected={value > 2} onClick={() => OnClickHandler(3)}/>
            <Star selected={value > 3} onClick={() => OnClickHandler(4)}/>
            <Star selected={value > 4} onClick={() => OnClickHandler(5)}/>
        </div>
    )

}

type StarTypeProps = {
    onClick: () => void
    selected: boolean
}

function Star(props: StarTypeProps) {
    const {onClick, selected} = props
    console.log('Star rendering')

    return (
        selected ? <span onClick={onClick}><b> Star </b></span>
                : <span onClick={onClick}> Star </span>
)


}

export default Rating