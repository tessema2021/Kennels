import React, { useState } from "react"
import "./PropsAndState.css"

export const PropsAndState = ({ yourName, day }) => {
    let [countClicks, setCountClicks] = useState(0)
    let [colorIndex, setColoeIndex] = useState(0);
    let [saveNow, setSaveNow] = useState(false);

    const allColors = ['red', 'blue', 'orange'];



    const handleClick = () => {
        //good practice:
        //make a copy of state, modify it, and then setState to the copy
        const newCountClicks = ++countClicks
        setCountClicks(newCountClicks);

        let newColorIndex = ++colorIndex;
        if (newColorIndex > allColors.length - 1) {
            newColorIndex = 0;
        }
        setColoeIndex(newColorIndex);
    }

    const handleChange = (event) => {
        console.log("what is event", event.target.value)
        let newSaveNow = saveNow;
        newSaveNow = true;
        setSaveNow(newSaveNow);

    }



    return (
        <>
            <h3>Welcome, {yourName} </h3>
            <p>Today is {day}</p>
            <p className={allColors[colorIndex]}>{countClicks}</p>
            <button onClick={(handleClick)}>Click Me</button>
            <hr />
            <hr />
            <hr />
            <div>
                <textarea type="text" name="note" placeholder='note' onChange={handleChange} />
                <button id="save" disabled={saveNow ? false : true}>Save Note</button>
            </div>
        </>
    )
}
