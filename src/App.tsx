import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router/Router";
import Chatbot from "./components/Chatbot/Chatbot";
import Navigation from "./components/Home/Navigation";
import "./App.css";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
      <Chatbot />
    </main>
  );
}
