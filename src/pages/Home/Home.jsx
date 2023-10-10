import React from "react";
import "./Home.css";
import FlashCard from "../../components/Flashcard/FlashCard";
import AddQuestion from "../../components/Add-question/AddQuestion";

function Home() {
  return (
    <div className="home-container">
      <AddQuestion />
      <FlashCard />
    </div>
  );
}

export default Home;
