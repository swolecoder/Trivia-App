import React from "react";
import shuffle from "lodash.shuffle";

const sampleAnswers = ["One", "Two", "Three", "Four"];

export default function Question({ question ,userAnswer}) {
  const result = shuffle([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  return (
    <div className="question">
      <h2 dangerouslySetInnerHTML={{ __html: question.question }} />

      {result.map((answer, index) => (
        <button key={index} onClick={()=> userAnswer(answer)}>{answer}</button>
      ))}
    </div>
  );
}
