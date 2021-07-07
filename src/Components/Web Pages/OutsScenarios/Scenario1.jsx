import React from "react";
import Card from "react-free-playing-cards";
import swal from 'sweetalert';

function Scenario1() {

    const [theirAnswer, setTheirAnswer] = React.useState("");

    const scenario1Answer = 9;

    function handleChange(event) {
        setTheirAnswer(event.target.value);
        console.log(theirAnswer);
    }

    function handleClick() {
        if (parseInt(theirAnswer) === scenario1Answer) {
            swal({
                text: "Correct!",
                customClass: ".sweet-alert button"
            });
            console.log(theirAnswer);
        } else {
            swal({
                text: "Wrong. Try Again!",
                customClass: ".sweet-alert button"
            });
        }
    }

    return (
        <div>
            <div className="hole-div">
            <p className="hole-cards"><strong>Hole Cards:</strong></p>
            <Card card="2c" />
            <Card card="3c" />
            </div>
            <div className="flop-div">
            <p className="flop-cards"><strong>The Flop: </strong></p>
            <Card card="Ah" />
            <Card card="6c" />
            <Card card="Jc" />
            </div>
            <p><strong>How Many Outs Do You Have?</strong></p>
            <input className="form-control"onChange={handleChange} value={theirAnswer} type="text"></input>
            <button className="btn btn-secondary" onClick={handleClick} type="button">Submit</button>
        </div>
    );
}


export default Scenario1;