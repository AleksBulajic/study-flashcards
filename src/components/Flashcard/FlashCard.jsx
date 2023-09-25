import React, { useState } from 'react';
import './FlashCard.css';

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };


  const content = isFlipped ? answer : question;

  return (
    <div className={`flashcard-container ${isFlipped ? 'flipped' : ''}`} onClick={flipCard}>
      <div className="flashcard">
        <div className={`card ${isFlipped ? 'flipped' : ''}`}>
          <div className="card-content">
            <h2>{isFlipped ? 'Answer' : 'Question'}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;
