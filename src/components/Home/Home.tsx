import { useState } from "react";
import "./home.css";
import { Button } from "react-bootstrap";
import { predict } from "../../utils/api";

const Home = () => {
  const [news, setNews] = useState("");
  const [result, setResult] = useState("");
  const handleClick = async () => {
    const res: any = await predict(news);
    setResult(parseFloat(res.data) > 0.5 ? "Fake News" : "Not Fake News");
  };
  return (
    <div className="wrapper d-flex justify-content-center align-items-center">
      <div className="content">
        <h2>Paste the News to check if its Fake</h2>
        <p>NOTE: This tool only works for last year U.S news</p>
        <textarea
          name="news"
          id="news"
          value={news}
          onChange={(e) => setNews(e.target.value)}
          cols={100}
          rows={10}
        ></textarea>
        <Button onClick={handleClick} variant="outline-light">
          Detect
        </Button>
        <div>{result}</div>
      </div>
    </div>
  );
};
export default Home;
