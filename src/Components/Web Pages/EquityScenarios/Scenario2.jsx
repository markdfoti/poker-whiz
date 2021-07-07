import React from "react";
import Card from "react-free-playing-cards";
import swal from 'sweetalert';


function Scenario2() {

    const correctEquity = 36;
    const correctOdds = 33;
    const correctFoldOrCall = "call";

    const [answer, setAnswer] = React.useState({
        equity: "",
        odds: "",
        foldOrCall: ""
    });

    function handleSubmit(event) {
        event.preventDefault();
        if (parseInt(answer.equity) === correctEquity && 
            parseInt(answer.odds) === correctOdds && 
            answer.foldOrCall === correctFoldOrCall) {
                swal ("Correct!");
        } else {
            swal ("Wrong. Try Again!");
        }
    }

    function handleChange(event) {
        const value = event.target.value;
        setAnswer((prevState) => {
            return {...prevState, [event.target.name]: value}
        })
    }


    return (

        <div>
            <div className="hole-div">
            <p className="hole-cards"><strong>Hole Cards:</strong></p>
            <Card card="Qd" />
            <Card card="7d" />
            </div>
            <div className="flop-div">
            <p className="flop-cards"><strong>The Flop: </strong></p>
            <Card card="5d" />
            <Card card="Kc" />
            <Card card="9d" />
            </div>
            <p><strong>There is $10 in the pot. You are facing a $10 bet.</strong></p>
            <form onSubmit={handleSubmit}>
            <div className="prompts-div">
            <label for="potequity"><strong>What Is Your Equity(%)? </strong></label>
            <input className="form-control" onChange={handleChange} name= "equity"type="text"></input>
  
            <label for="potodds"><strong>What Are The Pot Odds(%)? </strong></label>
            <input className="form-control" onChange={handleChange} name="odds" type="text"></input>
  
            <label for="foldorcall"><strong>Fold or Call? </strong></label>
            <input className="form-control" onChange={handleChange} name="foldOrCall" type="text"></input>
            </div>
            <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>

    );

}           

export default Scenario2;