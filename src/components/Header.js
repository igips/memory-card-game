import React, { useState } from "react";
import "../style/Header.css";

function Header(props) {
	return (
		<header>
			<span>Architecture Memory Game</span> <br />
			<div id="rules">Get points by clicking on an image but don't click on any more than once!</div>
			<div id="scoreDiv">
				<span>Score: {props.score}</span>
				<span>Best Score: {props.bestScore}</span>
			</div>
		</header>
	);
}

export default Header;
