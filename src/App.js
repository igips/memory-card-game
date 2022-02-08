import React, { useState } from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";

function App() {
	const [state, setState] = useState({
		cards: [
			{
				num: 1,
				name: "Hagia Sophia — Istanbul, Turkey",
				picked: false,
			},
			{
				num: 2,
				name: "Taj Mahal — Agra, India",
				picked: false,
			},
			{
				num: 3,
				name: "Acropolis of Athens — Athens, Greece",
				picked: false,
			},
			{
				num: 4,
				name: "Westminster Abbey — London, U.K.",
				picked: false,
			},
			{
				num: 5,
				name: "Château Frontenac — Québec, Canada",
				picked: false,
			},
			{
				num: 6,
				name: "The Colosseum — Rome, Italy",
				picked: false,
			},
			{
				num: 7,
				name: "The White House — Washington, D.C., USA",
				picked: false,
			},
			{
				num: 8,
				name: "Forbidden City — Beijing, China",
				picked: false,
			},
			{
				num: 9,
				name: "Potala Palace — Lhasa, Tibet, China",
				picked: false,
			},
			{
				num: 10,
				name: "Elizabeth Tower — London, U.K.",
				picked: false,
			},
			{
				num: 11,
				name: "Eiffel Tower — Paris, France",
				picked: false,
			},
			{
				num: 12,
				name: "Angkor Wat — Siem Reap, Cambodia",
				picked: false,
			},
		],
    score: 0,
    bestScore: 0,
    lost: false,
	});

	return (
		<>
			<Header score={state.score} bestScore={state.bestScore}></Header>
			<main>
				{state.cards.map((card) => {
					return <Card picked={card.picked} src={card.num} name={card.name}></Card>;
				})}
			</main>
			<footer>
				<a href="https://github.com/igips" target="_blank" rel="noreferrer">
					<i className="fab fa-github"></i>
				</a>
			</footer>
		</>
	);
}

export default App;
