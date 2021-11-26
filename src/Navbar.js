import React from "react";

function Navbar(props) {
    return (
        <header className="container-fluid fixed-top" >
            <div className="row">
                <div>
                    <img src="https://cdn.mos.cms.futurecdn.net/nJqzZf3iyhawJfofUMicFV-970-80.jpg.webp" alt="Pokemon Logo" width="350" height="140"></img>
                </div>
                <nav>
                    <p className="scoreboard">Score: <span className="scoreboard">{props.currentScore}</span></p>
                    <p className="scoreboard">Top Score: <span className="scoreboard">{props.highScore}</span> </p>
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;

