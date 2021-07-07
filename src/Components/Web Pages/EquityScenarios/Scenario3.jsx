import React from "react";
import Card from "react-free-playing-cards";
import swal from 'sweetalert';



function Scenario3() {

    const correctEquity = 24;
    const correctOdds = 30;
    const correctFoldOrCall = "fold";

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
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (parseInt(answer.equity) === correctEquity && parseInt(answer.odds) === correctOdds && answer.foldOrCall === correctFoldOrCall) {
            swal ("Correct!");
        } else {
            swal ("Wrong. Try Again!")
        }
    }

    return (

        <div>
            <div className="hole-div">
            <p className="hole-cards"><strong>Hole Cards:</strong></p>
            <Card card="Kh" />
            <Card card="Qc" />
            </div>
            <div className="flop-div">
            <p className="flop-cards"><strong>The Flop: </strong></p>
            <Card card="8s" />
            <Card card="6h" />
            <Card card="4c" />
            </div>
            <p className="holecards"><strong>There is $0.75 in the pot. You are facing a $0.55 bet.</strong></p>
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


export default Scenario3;