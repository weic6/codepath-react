//App.jsx
import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

let default_cards = [
  {
    answer: "Prayer Plant or Maranta",
    url: "https://www.thesill.com/products/maranta-prayer-plant",
    difficulty: "medium",
    id: 0,
    question: "What plant is known for its leaves that fold up at night?",
  },
  {
    answer: "Fenestration",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "medium",
    id: 1,
    question: "What is the term for the holes in a plant's leaves?",
  },
  {
    answer: "Music!",
    url: "https://c8.alamy.com/comp/2BGAKB1/hand-drawn-headphones-and-musical-notes-doodles-electronic-music-vector-concept-sketch-headphone-music-audio-musical-illustration-2BGAKB1.jpg",
    difficulty: "hard",
    id: 2,
    question: "What is a fun way to help plants grow?",
  },
  {
    answer: "Tropical",
    url: "https://thumbs.dreamstime.com/b/tropical-island-14129336.jpg",
    difficulty: "easy",
    id: 3,
    question: "What type of plant is a Monstera?",
  },
  {
    answer: "Dust or clean off the leaves",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "easy",
    id: 4,
    question: "What is the best way to care for a plant's leaves?",
  },
  {
    answer: "Isolate the plant from other plants",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "easy",
    id: 5,
    question: "What should you do if you suspect a plant has a disease?",
  },
  {
    answer: "ZZ Plant",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "medium",
    id: 6,
    question: "What plant is known for its waxy, oval-shaped leaves?",
  },
  {
    answer: "Overwatering or fungus infection",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "medium",
    id: 7,
    question: "What is the most common cause of root rot in houseplants?",
  },
  {
    answer: "Putting out flowers",
    url: "https://static.vecteezy.com/system/resources/previews/007/126/739/non_2x/question-mark-icon-free-vector.jpg",
    difficulty: "hard",
    id: 8,
    question: "What is a sign that a plant is under stress?",
  },
  {
    answer: "English Ivy",
    url: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL3Jhd3BpeGVsb2ZmaWNlNV9icmFuY2hfb2ZfdmluZV9sZWF2ZXNfaXNvbGF0ZWRfb25fd2hpdGVfYmFja2dyb18wMzg0ZjE3NC02NjAwLTQ3YzgtOTI1ZS0yYzRiODVmODc0OWNfMS5qcGc.jpg",
    difficulty: "hard",
    id: 9,
    question: "What plant is known for its ability to grow in low light?",
  },
];

function App() {
  const [cards, setCards] = useState(default_cards);
  const [qid, setQid] = useState(0); //question id
  // const [masterCardsId, setMasterCardsId] = useState([]); //question id
  const [correctness, setCorrectness] = useState("");
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const ans = cards[qid].answer;

  const handleNext = () => {
    setQid((qid + 1) % cards.length);
    setInput("");
    setCorrectness("");
  };
  const handlePrev = () => {
    if (qid > 0) {
      setQid((qid - 1) % cards.length);
    }
    setInput("");
    setCorrectness("");
  };
  const handleShuffle = () => {
    let shuffledCard = [...cards];
    for (let i = shuffledCard.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffledCard[i];
      shuffledCard[i] = shuffledCard[j];
      shuffledCard[j] = temp;
    }
    setCards(shuffledCard);
    setQid(0);
    setInput("");
    setCorrectness("");
    setCount(0);
  };

  const checkAnswer = () => {
    // alert(e);
    if (input.trim().toLowerCase() === ans.toLowerCase()) {
      setCorrectness("correct");
      setCount(count + 1);
    } else {
      setCorrectness("wrong");
    }
  };

  // const handleMasterCards = (id) => {
  //   const newMasterCardsId = [...masterCardsId, id];
  //   setMasterCardsId(newMasterCardsId);
  // };
  return (
    <div>
      <h2>The Ultimate Plant Parent!</h2>
      <h3>
        How good of a plant parent are you? Test all of your planty knowledge
        here!
      </h3>
      <h4>Number of cards: {cards.length}</h4>
      <h4>Number of correct guesses: {count}</h4>
      <Card
        key={qid}
        id={cards[qid].difficulty}
        question={cards[qid].question}
        answer={cards[qid].answer}
        url={cards[qid].url}
      />
      <div className="guessing">
        Guess the answer here:
        <input
          type="text"
          name="answer"
          placeholder="Enter your answer here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id={correctness}
        />
        <br />
        <button type="submit" className="submit-button" onClick={checkAnswer}>
          Submit your guess
        </button>
        {/* <button
          type="button"
          className="master-button"
          onClick={() => handleMasterCards(qid)}
        >
          Mark as Mastered
        </button> */}
      </div>

      <br />
      <button type="back" onClick={handlePrev} className="previousCard">
        « Previous
      </button>
      <button type="next" onClick={handleNext} className="nextCard">
        Next »
      </button>
      <button type="shuffle" onClick={handleShuffle} className="shuffle-button">
        Shuffle Cards
      </button>
    </div>
  );
}

export default App;
