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
        <p className="lead">{trueOrFalse === false ? "Equity refers to the percentage chance that you have of improving to the best hand, based on the cards you were dealt and the..." : "Equity refers to the percentage chance that you have of improving to the best hand, based on the cards you were dealt and the 3 cards on the flop. An easy way to calculate your equity is with the rule of 4 and 2: on the flop, multiple your outs by 4 and on the turn, multiply your outs by two. That means if you had an open-ended straight draw, 8 outs, then you have 32% equity, a 32% chance of making your straight with two cards left to come. Pot Odds refers to the relationship between the size of the pot and the size of the bet. And to calculate pot odds, you divide (the amount that you need to call [aka the opponents bet]) by (the previous pot size [before the opponent's bet or your call] + opponent's bet + your would-be call). For example, if there is $5 in the pot and your opponent bets $2.50, the pot odds you're getting are 25%. To know whether to fold or call an opponents bet, we have to compare our equity to the pot odds that we are recieving. If our equity is greater than the pot odds, then it is '+ev' and we should call. If our equity is less than the pot odds, then it is '-ev' and we should fold. So the idea is that if we have a good chance to improve to the best hand, we want to call. If our chances of improving to the best hand are slim, we should fold. Of course this is all relative to the pot odds that we are recieving. We might have a slim chance of improving to the best hand aka low equity, but if our opponent only bet 5 cents into a $5 pot, then we would pretty much call with any hand because the pot odds are so good."}(<span class="restOfText" onClick={handleTextToggle}>{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</p>
        <p><i>Press the button below to generate a new scenario.</i></p>
        <button className="btn btn-secondary" onClick={handleClick}>New Scenario</button>
        {daNumba === 1 ? <Scenario1 /> : null}
        {daNumba === 2 ? <Scenario2 /> : null}
        {daNumba === 3 ? <Scenario3 /> : null}
        </div>
    );
}





export default Equity;