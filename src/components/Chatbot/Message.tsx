import { FC } from "react";
import { Row } from "react-bootstrap";
import { Message as Props } from "../../utils";

const Message: FC<{ message: Props }> = ({ message }) => {
  return (
    <Row className="message">
      <div className={`message message-${message.user ? "right" : "left"}`}>
        {message.text}
      </div>
    </Row>
  );
};

export default Message;
