import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import TopicScreen from "./screens/TopicScreen";
import Statistics from "./screens/Statistics";
import Blog from "./screens/Blog";
import WelcomeScreen from "./screens/WelcomeScreen";
import TopicDetails from "./screens/TopicDetails";
import NotFound from "./screens/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />}>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/topics" element={<TopicScreen />} />
            <Route path="/topics/:quizId" element={<TopicDetails />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
