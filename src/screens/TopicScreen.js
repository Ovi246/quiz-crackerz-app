import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TopicScreen() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    axios.get("https://openapi.programming-hero.com/api/quiz").then((data) => {
      setTopics(data.data.data);
    });
  }, []);

  return (
    <div className="flex flex-col gap-5 md:grid md:grid-cols-4">
      {topics.map((item) => (
        <div key={item.id} className="p-2 bg-white rounded-md max-w-xl ">
          <img
            src={item.logo}
            alt=""
            className="bg-purple-200 rounded-md mb-2"
          />
          <div className="flex justify-between items-center">
            <h3 className="text-md font-bold text-purple-600">{item.name}</h3>
            <Link to={`/topics/${item.id}`}>
              <button className="bg-purple-400 p-1 text-white font-semibold rounded-md">
                Start Practice
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopicScreen;
