import React from "react";
import "./Home.css";
import FlashCard from "../../components/Flashcard/FlashCard";
import AddQuestion from "../../components/Add-question/AddQuestion";

function Home() {
  return (
    <div className="home-container">
      <FlashCard />
      <AddQuestion />
    </div>
  );
}

export default Home;
