import React from "react";
import Card from "react-free-playing-cards";
import swal from 'sweetalert';


function Scenario1() {

    const correctEquity = 32;
    const correctOdds = 30;
    const correctFoldOrCall = "call";

    const [answer, setAnswer] = React.useState({
        equity: "",
        odds: "",
        foldOrCall: ""
    });

    function handleChange(event) {
        const value = event.target.value;
        setAnswer((prevState) => {
            return {...prevState, [event.target.name]: value}
        });
        console.log(answer);
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(parseInt(answer.equity) === correctEquity && parseInt(answer.odds) === correctOdds && answer.foldOrCall === correctFoldOrCall) {
            swal("Correct!");
        } else {
            swal("Wrong. Try Again!")
        }
    }

    return (
        <div>
            <div className="hole-div">
            <p className="hole-cards"><strong>Hole Cards:</strong></p>
            <Card card="8h" />
            <Card card="9s" />
            </div>
            <div className="flop-div">
            <p className="flop-cards"><strong>The Flop: </strong></p>
            <Card card="Tc" />
            <Card card="Jd" />
            <Card card="2h" />
            </div>
            <p><strong>There is $3 in the pot. You are facing a $2.25 bet.</strong></p>
            <form onSubmit={handleSubmit}>
            <div className="prompts-div">
            <label  for="potequity"><strong>What Is Your Equity(%)? </strong></label>
            <input className="form-control" onChange={handleChange} value={answer.equity} name= "equity"type="text"></input>

            <label for="potodds"><strong>What Are The Pot Odds(%)? </strong></label>
            <input className="form-control" onChange={handleChange} value={answer.odds} name="odds" type="text"></input>

            <label for="foldorcall"><strong>Fold or Call? </strong></label>
            <input className="form-control" onChange={handleChange} value={answer.foldOrCall} name="foldOrCall" type="text"></input>
            </div>
            
            <button className="btn btn-secondary" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Scenario1;