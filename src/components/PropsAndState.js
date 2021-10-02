import React, { useState } from "react"
import "./PropsAndState.css"
import { QuoteCard } from "./qoutes/quotes"

export const PropsAndState = ({ myUser }) => {
    let [countClicks, setCountClicks] = useState(0)
    let [colorIndex, setColoeIndex] = useState(0);
    let [saveNow, setSaveNow] = useState(false);

    const allColors = ['red', 'blue', 'orange'];

    const Today = new Date(Date.now());
    const date = Today.toDateString();



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
            <h3>Welcome, {myUser.name} and {myUser.pet} </h3>
            <QuoteCard />
            <p>Today is Wonderful</p>
            <p>Today is {date}</p>
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
