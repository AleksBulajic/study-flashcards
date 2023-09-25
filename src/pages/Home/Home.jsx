import React from "react";
import "./Home.css";
import FlashCard from "../../components/Flashcard/FlashCard";

function Home() {
  return (
    <>
        <div className="home-container">
      <FlashCard
        question="What is React?"
        answer="React is a JavaScript library for building user interfaces."
      />
    </div>
    </>
  );
}

export default Home;
