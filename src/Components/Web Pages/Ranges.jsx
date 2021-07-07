import React from "react";
import Baseline from "../Ranges_Tables/Baseline";
import UTG from "../Ranges_Tables/UTG";
import UTG1 from "../Ranges_Tables/UTG1";
import UTG2 from "../Ranges_Tables/UTG2";
import Lojack from "../Ranges_Tables/Lojack";
import Hijack from "../Ranges_Tables/Hijack";
import Cutoff from "../Ranges_Tables/Cutoff";
import Dealer from "../Ranges_Tables/Dealer";
import SB from "../Ranges_Tables/SB";

function Ranges() {

    const [ position, setPosition ] = React.useState("baseline");

    const [restOfText, setRestOfText] = React.useState("");

    const [trueOrFalse, setTrueOrFalse] = React.useState(false);


    function handleChange(event) {
      setPosition(event.target.value);
    }

    function handleClick(event) {
      setTrueOrFalse(!trueOrFalse);
      console.log(trueOrFalse);
      // setRestOfText("")
    }


    return (
      <div>
          <h1 className="display-4">Opening Ranges Study</h1>
          <p className="lead">{trueOrFalse === false ? "Your position at the poker table is one of the most important concepts to understand, as it will be a ..." : "Your position at the poker table is one of the most important concepts to understand, as it will be a big part in guiding how you play. The reason for this is that in poker, information about what cards your opponent might have is paramount. And when you are in an early position, you will gain zero or less information from your opponents, because you are first (or one of the first) to act. But let's say you are in a later position, like Cutoff. You've already had multiple people act before you, and by their actions (whether they limped in, folded or raised) you gain information about their hand, which can then guide your strategy. Another reason why position is so important is that let's say you are in an early position, such as UTG+1. You really have to think before you limp in or raise. This is because you have SO many people to act behind you that might re-raise you, for instance. If you are in a later position, you have less people to get through, so you don't have to worry so much when taking an action."}<span onClick={handleClick}>{restOfText}(<span class="restOfText">{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</span></p>
          <p><i>Select your position at the table from the dropdown below to view with which hands you should raise or fold.</i></p>  
          
          
          


          <form id="position" method="get">
            <select className="form-select" id="position-select" name="positions" onChange={handleChange}>
              <option  value="baseline"></option>
              <option value="utg">UTG</option>
              <option value="utg1">UTG +1</option>
              <option value="utg2">UTG +2</option>
              <option value="lojack">Lowjack</option>
              <option value="hijack">Hijack</option>
              <option value="cutoff">Cutoff</option>
              <option value="button">Button</option>
              <option value="sb">Small Blind</option>
            </select>
          </form>




          {position === "baseline" ? <Baseline /> : null}
          {position === "utg" ? <UTG /> : null}
          {position === "utg1" ? <UTG1 /> : null}
          {position === "utg2" ? <UTG2 /> : null}
          {position === "lojack" ? <Lojack /> : null}
          {position === "hijack" ? <Hijack /> : null}
          {position === "cutoff" ? <Cutoff /> : null}
          {position === "button" ? <Dealer /> : null}
          {position === "sb" ? <SB /> : null}

      </div>
    );
}






export default Ranges;