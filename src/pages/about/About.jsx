import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div className="centered-div">
      <h1>About the Flashcard App</h1>
      <p>
        Welcome to the Flashcard App, your go-to tool for preparing for programming language interviews!
      </p>
      <p>
        Our mission is to help you ace technical interviews by providing a simple and effective way to learn and revise key concepts and questions related to programming languages, data structures, and algorithms.
      </p>
      <h2>Key Features:</h2>
      <ul>
        <li>Extensive Question Database: Our app features a comprehensive collection of programming language questions commonly asked in interviews.</li>
        <li>Interactive Learning: Use our flashcards to practice both questions and answers, and flip between them to reinforce your knowledge.</li>
        <li>Interview Preparation: Whether you're preparing for your first job interview or aiming to level up your coding skills, our app has you covered.</li>
        <li>User-Friendly Interface: Our clean and intuitive design makes it easy to navigate through the flashcards.</li>
      </ul>
      <h2>How to Use:</h2>
      <p>
        To get started, simply click on the "Home" page, and you'll be presented with a flashcard. Click on it to flip between the question and answer sides. Use the "Next" and "Previous" buttons to navigate through the flashcards.
      </p>
      <p>
        Whether you're a beginner or an experienced developer, continuous learning is the key to success in the tech industry. We hope our Flashcard App helps you in your journey to becoming a confident and knowledgeable programmer.
      </p>
      <p>Happy coding and best of luck with your interviews!</p>
    </div>
  );
}

export default About;
