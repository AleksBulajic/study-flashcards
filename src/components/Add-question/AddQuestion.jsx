import React, { useState } from "react";
import axios from "axios";
import "./AddQuestion.css";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [formVisible, setFormVisible] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleToggleForm = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new question object
    const newQuestion = {
      question,
      answer,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/questions/add",
        newQuestion
      );

      console.log("Question added successfully:", response.data);

      setQuestion("");
      setAnswer("");
      setFormVisible(false); // Hide the form after submission
      showSuccessMessage();
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };
  const showSuccessMessage = () => {
    setSuccessMessageVisible(true);
    setTimeout(() => {
      setSuccessMessageVisible(false);
    }, 3000); // Adjust the duration as needed (e.g., 3000 milliseconds for 3 seconds)
  };

  return (
    <div className="add-question-form">
      <h2 className="add-question-title" style={{ color: "#0bc5e7" }}>
        <button  onClick={handleToggleForm}>{formVisible ? "-" : "+"}</button>{" "}
        Add a New Question
      </h2>
      {successMessageVisible && (
        <div className="success-message">Question added successfully!</div>
      )}
      
      {formVisible && (
        <form onSubmit={handleSubmit}>
          <div className="question-input">
            <label>Question:</label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              required
              className="input"
            />
          </div>
          <div className="answer-input">
            <label>Answer:</label>
            <input
              type="text"
              value={answer}
              onChange={handleAnswerChange}
              required
              className="input"
            />
          </div>
          <button className="submit-button" type="submit">Add Question</button>
        </form>
      )}
    </div>
  );
}

export default AddQuestion;
