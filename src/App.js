import React, { useState, useEffect } from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import Card from "./components/Card.js";
import uniqid from "uniqid";


function App() {
	const initialCardsData = [
		{
			num: 1,
			name: "Hagia Sophia — Istanbul, Turkey",
			picked: false,
			id: uniqid(),
		},
		{
			num: 2,
			name: "Taj Mahal — Agra, India",
			picked: false,
			id: uniqid(),
		},
		{
			num: 3,
			name: "Acropolis of Athens — Athens, Greece",
			picked: false,
			id: uniqid(),
		},
		{
			num: 4,
			name: "Westminster Abbey — London, U.K.",
			picked: false,
			id: uniqid(),
		},
		{
			num: 5,
			name: "Château Frontenac — Québec, Canada",
			picked: false,
			id: uniqid(),
		},
		{
			num: 6,
			name: "The Colosseum — Rome, Italy",
			picked: false,
			id: uniqid(),
		},
		{
			num: 7,
			name: "The White House — Washington, D.C., USA",
			picked: false,
			id: uniqid(),
		},
		{
			num: 8,
			name: "Forbidden City — Beijing, China",
			picked: false,
			id: uniqid(),
		},
		{
			num: 9,
			name: "Potala Palace — Lhasa, Tibet, China",
			picked: false,
			id: uniqid(),
		},
		{
			num: 10,
			name: "Elizabeth Tower — London, U.K.",
			picked: false,
			id: uniqid(),
		},
		{
			num: 11,
			name: "Eiffel Tower — Paris, France",
			picked: false,
			id: uniqid(),
		},
		{
			num: 12,
			name: "Angkor Wat — Siem Reap, Cambodia",
			picked: false,
			id: uniqid(),
		},
	];

  const [modal, setModal] = useState({
    show: false,
  });

	const [state, setState] = useState({
		cards: shuffleArray(initialCardsData),
		score: 0,
		bestScore: 0,
	});

  function showModal() {
    setModal({show: true});
  }

  function hideModal() {
    setModal({show: false});
  }

	function shuffleArray(toShuffle) {
		const array = toShuffle.map((x) => x);

		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}

		return array;
	}

	function handleClick(id) {
		setState((prevState) => {
			let lostGame = false;
			let bestS = state.bestScore;

			const newCards = prevState.cards.map((item) => {
				if (item.id === id) {
					if (!item.picked) {
						const newCard = {
							...item,
							picked: true,
						};
						return newCard;
					} else {
						lostGame = true;
						return item;
					}
				} else {
					return item;
				}
			});

			if (!lostGame) {
				return {
					...prevState,
					cards: shuffleArray(newCards),
					score: state.score + 1,
				};
			} else {
				if (state.score > bestS) {
					bestS = state.score;
				}

				return {
					cards: shuffleArray(initialCardsData),
					bestScore: bestS,
					score: 0,
				};
			}
		});
	}

	return (
		<>
			<Header score={state.score} bestScore={state.bestScore}></Header>
			<main>
				{state.cards.map((card) => {
					return (
						<Card click={handleClick} id={card.id} key={uniqid()} src={card.num} name={card.name}></Card>
					);
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
