import React from "react";
import Scenario1 from "../Web Pages/EquityScenarios/Scenario1";
import Scenario2 from "../Web Pages/EquityScenarios/Scenario2";
import Scenario3 from "../Web Pages/EquityScenarios/Scenario3";


function Equity() {

    const [daNumba, setDaNumba] = React.useState("");

    const [trueOrFalse, setTrueOrFalse] = React.useState(false);


    function handleClick() {
        const randomNumber = Math.ceil(Math.random() * 3);
        setDaNumba(randomNumber);
    }

    const restOfText = ""

    function handleTextToggle() {
        setTrueOrFalse(!trueOrFalse);
    }

    return (
        <div>
        <h1 className="display-4">Calculating Pot Odds vs. Equity</h1>
        <p className="lead">{trueOrFalse === false ? "Equity refers to the percentage chance that you have of improving to the best hand. With our knowledge of counting 'outs', we can..." : "Equity refers to the percentage chance that you have of improving to the best hand. With our knowledge of counting 'outs', we can use what's known as the '4-2' Rule to easily calculate our equity. If you are on the flop, multiply your 'outs' by 4, and if you are on the turn, multiply your 'outs' by 2. For example, if you have 8 'outs' on the flop, 8 * 4 = 32% equity, a.k.a. a 32% chance to hit your winning hand by showdown. Pot Odds refers to the relationship between the size of the pot (what you stand to win) and the size of the bet (what you have to risk). For example, if there is $5 in the pot and your opponent bets $2.50, the pot odds you're getting are 25% (2.5/[2.5 + 2.5 + 5]) ==> (your call/[your call + their bet + size of pot]). To know whether to fold or call an opponents bet, we have to compare our equity to the pot odds that we are recieving. If our equity is greater than the pot odds, then we should call. If our equity is less than the pot odds, then we should fold. So the idea is that if we have a good chance to improve to the best hand, we want to call. If our chances of improving to the best hand are slim, we should fold. Of course this is all relative to the pot odds that we are recieving. We might have a slim chance of improving to the best hand, a.k.a. low equity, but if our opponent only bet $.05 into a $5 pot, then we should pretty much call with any hand because the pot odds are so favorable."}(<span class="restOfText" onClick={handleTextToggle}>{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</p>
        
        
        <p><i>Press the button below to generate a new scenario.</i></p>
        <button className="btn btn-secondary" onClick={handleClick}>New Scenario</button>
        {daNumba === 1 ? <Scenario1 /> : null}
        {daNumba === 2 ? <Scenario2 /> : null}
        {daNumba === 3 ? <Scenario3 /> : null}
        </div>
    );
}





export default Equity;