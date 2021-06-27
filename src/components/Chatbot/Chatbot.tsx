import { useState } from "react";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";
import { Message as MessageProps } from "../../utils";
import "./chatbot.css";
import { sendMessage } from "../../utils/api";
import Message from "./Message";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const handleClick = async () => {
    const res: any = await sendMessage(text);
    setMessages([
      ...messages,
      { user: true, text },
      { user: false, text: res.data.response },
    ]);
    setText("");
  };

  return (
    <Container className={`chatbot`}>
      <Row
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", height: "5vh" }}
      >
        <Col sm={10} className="d-flex align-items-center">
          Chatbot
        </Col>
        <Col sm={2} className="d-flex align-items-center">
          <i className={`fa fa-arrow-${open ? "down" : "up"}`}></i>
        </Col>
      </Row>
      {open && (
        <>
          <div className="messages">
            {messages.map((message, idx) => (
              <Message key={idx} message={message} />
            ))}
          </div>
          <Row className="send-message">
            <Col sm={9}>
              <FormControl
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
            <Col sm={2}>
              <Button className="btn-sm" onClick={handleClick}>
                Send
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default Chatbot;
