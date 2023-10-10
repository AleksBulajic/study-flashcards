import React, { useState } from "react";
import axios from "axios";
import "./AddQuestion.css";

function AddQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [formVisible, setFormVisible] = useState(false);

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
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  return (
    <div>
      <h2 className="add-question-title">
        <button onClick={handleToggleForm}>{formVisible ? "-" : "+"}</button>{" "}
        Add a New Question
      </h2>

      {formVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Question:</label>
            <input
              type="text"
              value={question}
              onChange={handleQuestionChange}
              required
            />
          </div>
          <div>
            <label>Answer:</label>
            <input
              type="text"
              value={answer}
              onChange={handleAnswerChange}
              required
            />
          </div>
          <button type="submit">Add Question</button>
        </form>
      )}
    </div>
  );
}

export default AddQuestion;
