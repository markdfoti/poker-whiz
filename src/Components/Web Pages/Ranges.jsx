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
          <p className="lead">{trueOrFalse === false ? "Your position at the poker table is one of the most important concepts to understand, as it will play a ..." : "Your position at the poker table is one of the most important concepts to understand, as it will play a big part in guiding how you play. Position in poker refers to the order which players are allowed to act. A player who acts first is “out of position” while a player who acts last is “in position”. Playing in position gives a distinct advantage due to the extra information gained and the ability to more effectively control the size of the pot. This is why you will notice, as you study the chart below, that you should be playing 'tighter' if you are in an early position such as 'UTG+1' and 'looser' if you are in a later position such as 'Cutoff'."}<span onClick={handleClick}>{restOfText}(<span class="restOfText">{trueOrFalse === false ? "show rest of text" : "hide text"}</span>)</span></p>
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