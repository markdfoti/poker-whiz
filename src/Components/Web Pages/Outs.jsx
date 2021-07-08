import React from "react";
import Scenario1 from "./OutsScenarios/Scenario1";
import Scenario2 from "./OutsScenarios/Scenario2";
import Scenario3 from "./OutsScenarios/Scenario3";

function Outs(props) {

    const [buttonNumber, setButtonNumber] = React.useState();

    const [trueOrFalse, setTrueOrFalse] = React.useState(false);

    function handleClick() {
        var randomNumber = Math.ceil(Math.random() * 3);
        setButtonNumber(randomNumber);
    }

    function handleTextToggle() {
        setTrueOrFalse(!trueOrFalse);
    }

    const restOfText = ""


    return (
        <div>
        <h1 className="display-4">Counting Your Outs Practice</h1>
        <p className="lead">{trueOrFalse === false ? "One of the very easy calculations you should learn concerns the concept of counting your 'outs'. An 'out' is..." : "One of the very easy calculations you should learn concerns the concept of counting your 'outs'. An 'out' is any unseen card that, if drawn, will improve a player's hand to one that is likely to win. Knowing the number of outs a player has is another important part of poker strategy. For example, if you have two diamonds in your hand and two more diamonds came on the flop, you would have nine 'outs' because there are 13 cards of each suit and 13 - 4 = 9. Once you are comfortable with counting 'outs', you can head over to the 'Calculating Equity vs. Pot Odds' section where we will use our knowledge of counting 'outs' to help us calculate equity relative to our pot odds to decide whether to call or fold in any given scenario."}(<span onClick={handleTextToggle} class="restOfText">{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</p>
        <p><i>Press on the button below to generate a new scenario.</i></p>
        <button className="btn btn-secondary" onClick={handleClick}>New Scenario</button>
        {buttonNumber === 1 ? <Scenario1 /> : null}
        {buttonNumber === 2 ? <Scenario2 /> : null}
        {buttonNumber === 3 ? <Scenario3 /> : null}
        </div>
    );


}






export default Outs;