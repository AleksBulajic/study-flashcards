import React, { useState, useEffect } from "react";
import "./FlashCard.css";
import axios from "axios";

function FlashCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [allQuestions, setAllQuestions] = useState([]);
  
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentQuestion((currentQuestion + 1) % allQuestions.length);
  };
  
  const handlePrevious = () => {
    setIsFlipped(false);
    setCurrentQuestion(
      (currentQuestion - 1 + allQuestions.length) % allQuestions.length
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/questions/all");
        console.log(response.data);
        setAllQuestions(response.data);
      } catch (error) {
        console.error("Error getting data:", error);
      }
    };

    fetchData();
  }, []);

  const currentQuestionData = allQuestions[currentQuestion] || {};

  const content = isFlipped ? currentQuestionData.answer : currentQuestionData.question;

  return (
    <>
      <div className="flashcard-container" onClick={flipCard}>
        <div className="flashcard">
          <div className={`card ${isFlipped ? "flipped" : ""}`}>
            <div className="card-content">
              <h2>{isFlipped ? "Answer" : "Question"}</h2>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="previus-b" onClick={handlePrevious}>Previous</button>
        <button className="next-b" onClick={handleNext}>Next</button>
      </div>
    </>
  );
}

export default FlashCard;
