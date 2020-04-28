import React, { useEffect, useState, useCallback } from "react";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultModal from "./components/ResultModal";
import Scoreboard from "./components/Scoreboard";
import "./App.css";

export default function App() {
  const [questions, setQuestions] = useState(null);
  const [selectCategory, setSelectedCategory] = useState("any");
  const [isCorrect, setIsCorrect] = useState(false);
  const [isWrong, setIsWrong] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const getQuestion = useCallback(() => {
    setIsCorrect(false);
    setIsWrong(false);
    let url = "https://opentdb.com/api.php?amount=1";

    if (selectCategory !== "any") url += `&category=${selectCategory}`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.results[0]);
        setQuestions(res.results[0]);
      });
  }, [selectCategory]);

  useEffect(() => {
    getQuestion();
  }, [getQuestion, selectCategory]);

  //handleclick
  function handleUserAnswer(answer) {
    if (answer === questions.correct_answer) {
      setCorrect((prev) => prev + 1);
      setIsCorrect(true);
    } else {
      setWrong((prev) => prev + 1);
      setIsWrong(true);
    }
  }

  return (
    <div className="app">
      {/* show the result modal ----------------------- */}
      {(isCorrect || isWrong) && (
        <ResultModal
          isCorrect={isCorrect}
          isWrong={isWrong}
          nextQuestion={getQuestion}
          answer={questions.correct_answer}
        />
      )}

      {/* question header ----------------------- */}
      <div className="question-header">
        <CategorySelector
          category={selectCategory}
          chooseCategory={setSelectedCategory}
        />
        <Scoreboard correct={correct} wrong={wrong} />
      </div>

      {/* the question itself ----------------------- */}
      <div className="question-main">
        {questions && (
          <Question question={questions} userAnswer={handleUserAnswer} />
        )}
      </div>

      {/* question footer ----------------------- */}
      <div className="question-footer">
        <button onClick={getQuestion}>Go to next question 👉</button>
      </div>
    </div>
  );
}
