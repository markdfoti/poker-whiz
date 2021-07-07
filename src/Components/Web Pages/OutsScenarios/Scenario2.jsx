import React from "react";
import Card from "react-free-playing-cards";
import swal from 'sweetalert';

function Scenario2() {

    const [theirAnswer, setTheirAnswer] = React.useState("");

    const scenario2Answer = 8;

    function handleChange(event) {
        setTheirAnswer(event.target.value);
        console.log(theirAnswer);
    }

    function handleClick() {
        if (parseInt(theirAnswer) === scenario2Answer) {
            swal("Correct!");
            console.log(theirAnswer);
        } else {
            swal("Wrong. Try Again!");
        }
    }

    return (
        <div>
            <div className="hole-div">
            <p className="hole-cards"><strong>Hole Cards:</strong></p>
            <Card card="7d" />
            <Card card="8h" />
            </div>
            <div className="flop-div">
            <p className="flop-cards"><strong>The Flop: </strong></p>
            <Card card="6s" />
            <Card card="Ts" />
            <Card card="4c" />
            </div>
            <p><strong>How Many Outs Do You Have?</strong></p>
            <input className="form-control" onChange={handleChange} value={theirAnswer} type="text"></input>
            <button className="btn btn-secondary" onClick={handleClick} type="button">Submit</button>
        </div>
    );
}




export default Scenario2;