import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import FlashCard from "../../components/Flashcard/FlashCard";

function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuestion, setIsQuestion] = useState("");
  const [allQuestions, setAllQuestions] = useState([]);

  useEffect(() => {
    console.log("allQuestions:", allQuestions);
  }, [allQuestions]);

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
  const handleNext = () => {
    // Increase the question index, and handle wrapping around.
    setCurrentQuestion((currentQuestion + 1) % allQuestions.length);
  };

  const handlePrevious = () => {
    // Decrement the question index, and handle wrapping around.
    setCurrentQuestion(
      (currentQuestion - 1 + allQuestions.length) % allQuestions.length
    );
  };

  return (
    <>
      <div className="home-container">
        <FlashCard
          question={allQuestions[currentQuestion]?.question}
          answer={allQuestions[currentQuestion]?.answer}
        />
        <div className="navigation-buttons">
          <button onClick={handlePrevious}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Home;
