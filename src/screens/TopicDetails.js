import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TopicDetails() {
  const { quizId } = useParams();
  const [data, setData] = useState();
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  useEffect(() => {
    axios
      .get(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
      .then((data) => {
        setData(data.data.data);
      });
  }, [quizId]);

  const handleOnChange = (e, questionId) => {
    console.log(e.target.value, questionId);

    if (checkAnswer(questionId, e.target.value)) {
      const div = e.currentTarget;
      div.className =
        "bg-green-300 border-2 border-green-500 rounded-md py-5 px-2 hover:bg-purple-300";
      div.parentElement
        .querySelectorAll("input[type=radio")
        .forEach((button) => {
          button.setAttribute("disabled", "");
        });
      setCorrect((prev) => prev + 1);
    } else {
      const div = e.currentTarget;
      div.className =
        "bg-red-300 border-2 border-red-500 rounded-md py-5 px-2 hover:bg-purple-300";
      div.parentElement
        .querySelectorAll("input[type=radio")
        .forEach((button) => {
          button.setAttribute("disabled", "");
        });
      setWrong((prev) => prev + 1);
    }
  };

  const showAnswer = (e, answer) => {
    const divs = document.querySelectorAll("input[type=radio").forEach((el) => {
      if (el.value === answer) {
        el.parentElement.className =
          "bg-green-300 border-2 border-green-500 rounded-md py-5 px-2 hover:bg-purple-300";
      }
    });

    console.log(divs);
  };

  const showScore = (e) => {
    const targetDiv = e.currentTarget.parentElement;

    targetDiv.outerHTML = `<div class="bg-white p-5 flex justify-evenly mb-5">
    <p class="font-bold bg-green-200 p-5">Corrected : ${correct}</p>
    <p class="font-bold bg-red-300 p-5">Wrong : ${wrong}</p>
  </div>`;
  };

  const checkAnswer = (questionId, answer) => {
    const question = data?.questions.find(
      (element) => element.id === questionId
    );
    if (question.correctAnswer === answer) return true;
  };

  return (
    <div>
      <h1 className="text-xl md:text-3xl text-center mb-16 text-purple-700 font-bold">
        Quiz of {data?.name}
      </h1>
      {data?.questions.map((question) => (
        <div className="bg-white mb-5 rounded-md p-5" key={question.id}>
          <div className="flex justify-between">
            <h2 className="text-2xl text-center text-purple-500 font-semibold">
              {question.question}
            </h2>
            <FontAwesomeIcon
              icon={faEye}
              className="inline text-purple-700 cursor-pointer"
              onClick={(e) => showAnswer(e, question?.correctAnswer)}
            />
          </div>
          <br />
          <div className="grid grid-cols-2 gap-2">
            {question.options?.map((option, idx) => (
              <div
                className="bg-white border-2 border-purple-500 rounded-md py-5 px-2 hover:bg-purple-300"
                onChange={(e) => handleOnChange(e, question?.id)}
                id="questions"
                key={option.id}
              >
                <input
                  type="radio"
                  id={question?.id}
                  name="question"
                  value={option}
                  className="mr-2"
                />
                <label htmlFor={idx}>{option}</label>
                <br />
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <button
          className="p-3 rounded-md bg-purple-500 text-white text-xl mx-[45%] mb-5"
          onClick={showScore}
        >
          Show Score
        </button>
      </div>
    </div>
  );
}

export default TopicDetails;
