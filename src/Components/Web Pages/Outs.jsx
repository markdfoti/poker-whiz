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
        <p className="lead">{trueOrFalse === false ? "One really important thing you need to get in the habit of when playing poker is counting your 'outs'. 'Outs' refer to..." : "One really important thing you need to get in the habit of when playing poker is counting your 'outs'. 'Outs' refer to the cards that you need to hit to improve to the winning hand and counting them is the first step towards figuring out basic poker odds (because then we can start to compare the number of 'outs' we have to the number of cards remaining in the deck to calculate our equity. This will then allow us to compare our equity to the pot odds that we are facing, which then tells us whether it is + or - 'ev', and thus whether we should call or fold. Don't worry if you aren't yet knowledgable on these terms as they are explained in the 'Calculating Pot Odds vs. Equity' section). Let's say you have 2 clubs in your hand, and 2 more clubs came on the flop. Let's say you don't have a pair or anything like that, BUT if another club came on the turn or the river, you would improve to a flush, which more than likely would be the winning hand. How many 'outs' do you have in this scenario? There are 13 cards of every suit, so there are 13 clubs. 2 of the are in your hand and 2 are on the board. 13-4=9 'outs'!"}(<span onClick={handleTextToggle} class="restOfText">{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</p>
        <p><i>Press on the button below to generate a new scenario.</i></p>
        <button className="btn btn-secondary" onClick={handleClick}>New Scenario</button>
        {buttonNumber === 1 ? <Scenario1 /> : null}
        {buttonNumber === 2 ? <Scenario2 /> : null}
        {buttonNumber === 3 ? <Scenario3 /> : null}
        </div>
    );


}






export default Outs;