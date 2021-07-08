import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Outs from "../Web Pages/Outs";
  import Ranges from "../Web Pages/Ranges";
  import Equity from "../Web Pages/Equity";
  import homepagePic from "../../images/homepage-pic.jpg"

function Home() {
    return (
        <div>

        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Welcome to <i>Poker Whiz</i></h1>
                <p class="lead">Learn the basics of poker ranges, equity and odds to put you ahead of 99% of other players.</p>
            </div>
        </div>

        <img class="homepage-pic" src={homepagePic} alt=""></img>

        </div>
    );
}

export default Home;