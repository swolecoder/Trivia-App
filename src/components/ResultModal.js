import React from "react";

export default function ResultModal({
  isCorrect = false,
  isWrong = false,
  nextQuestion,
  answer,
}) {
  return (
    <div className="result-modal">
      <div className="overlay" />
      <div className="result-modal-content">
        {isCorrect && (
          <h3>
            👊👊👊
            <br />
            YOU WON!
          </h3>
        )}

        {isWrong && (
          <h3>
            😟😢😟
            <br />
            YOU LOST!
          </h3>
        )}

        <div className="correct-answer">
          <small>The correct answer was:</small>
          <br />
          <strong dangerouslySetInnerHTML={{ __html: answer }}></strong>
        </div>

        <button onClick={nextQuestion}> Go to next question 👉</button>
      </div>
    </div>
  );
}
