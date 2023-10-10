import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlashCard.css';

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isQuestion, setIsQuestion] = useState('')
  const [allQuestions, setAllQuestions] = useState([])

  useEffect(() => {
    console.log('allQuestions:', allQuestions)
  }, [allQuestions])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/questions/all');
        console.log(response.data); 
      setAllQuestions(response.data);
      
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  // TODO create a state qurent question,  and button for the next question 
  

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
