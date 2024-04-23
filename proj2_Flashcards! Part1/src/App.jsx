//App.jsx
import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

const cards = [
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
  const [qid, setQid] = useState(0); //question id
  const handleClick = () => {
    setQid(Math.floor(Math.random() * cards.length)); //randomize the question order
  };

  return (
    <div>
      <h2>The Ultimate Plant Parent!</h2>
      <h3>
        How good of a plant parent are you? Test all of your planty knowledge
        here!
      </h3>
      <h4>Number of cards: {cards.length}</h4>
      <Card
        key={qid}
        id={cards[qid].difficulty}
        question={cards[qid].question}
        answer={cards[qid].answer}
        url={cards[qid].url}
      />
      <button type="next" onClick={handleClick} className="nextCard">
        ⭢
      </button>
    </div>
  );
}

export default App;
