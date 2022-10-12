import React from "react";
import { Link } from "react-router-dom";
import TopicScreen from "./TopicScreen";

function WelcomeScreen() {
  return (
    <>
      <div className="p-5 h-32 bg-cover bg-[url('https://img.freepik.com/free-vector/orange-question-mark-background-with-text-space_1017-27394.jpg')] bg-no-repeat mb-5">
        <div className="flex flex-col items-center ">
          <h1 className="text-2xl text-white font-semibold text-center mb-3 font-['Dancing Script']]">
            Start Your Learning Today
          </h1>
          <Link to="/topics">
            <button className="p-2 bg-white ">Get Started</button>
          </Link>
        </div>
      </div>
      <TopicScreen />
    </>
  );
}

export default WelcomeScreen;
