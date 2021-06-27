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
      { user: false, text: res.response },
      { user: true, text },
    ]);
    setText("");
  };

  return (
    <Container className={`chatbot`}>
      <Row>
        <Col sm={10}>Chatbot</Col>
        <Col sm={2}>
          <i
            onClick={() => setOpen(!open)}
            className={`fa fa-arrow-${open ? "down" : "up"}`}
          ></i>
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
            <Col sm={10}>
              <FormControl
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </Col>
            <Col sm={2}>
              <Button onClick={handleClick}>Send</Button>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default Chatbot;
