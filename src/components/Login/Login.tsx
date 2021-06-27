import { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { logIn, signUp } from "../../utils/api";
import { setAuth } from "../../utils";
import "./login.css";

const Login = () => {
  const [login, setLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [toastHeader, setToastHeader] = useState("");
  const [toastBody, setToastBody] = useState("");
  const history = useHistory();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await logIn(email, password);
    if (res.data === "0") {
      setShow(true);
      setToastBody("Your email or password is incorrect");
      setToastHeader("");
    } else {
      setAuth(res.data);
      history.push("/home");
    }
  };
  const handleSignup = async (e: any) => {
    e.preventDefault();
    const res: any = await signUp(name, email, password);
    if (res === "DOne") {
      setShow(true);
      setToastHeader("Your account has been created");
      setToastBody("Login with your credentials");
    }
  };

  return (
    <div className="login-holder">
      <Form onSubmit={(e) => (login ? handleLogin(e) : handleSignup(e))}>
        {!login && (
          <FormGroup className="pb-1">
            <FormLabel className="pb-1">Name</FormLabel>
            <FormControl
              className="pb-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
          </FormGroup>
        )}
        <FormGroup className="pb-1">
          <FormLabel className="pb-1">E-mail</FormLabel>
          <FormControl
            className="pb-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </FormGroup>
        <FormGroup className="pb-1">
          <FormLabel className="pb-1">Password</FormLabel>
          <FormControl
            className="pb-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        {!login && (
          <FormGroup className="pb-1">
            <FormLabel className="pb-1">Confirm Password</FormLabel>
            <FormControl
              className="pb-1"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
        )}
        <FormGroup className="pb-1">
          <FormLabel
            className="login-to-signup pb-1"
            onClick={() => setLogin(!login)}
          >
            {login ? "Create an account" : "Have an account already?"}
          </FormLabel>
        </FormGroup>
        <FormGroup className="pb-1">
          <Button className="pb-1" onClick={login ? handleLogin : handleSignup}>
            {login ? "Login" : "Signup"}
          </Button>
        </FormGroup>
      </Form>
      <Toast onClose={() => setShow(false)} show={show}>
        <ToastHeader>{toastHeader}</ToastHeader>
        <ToastBody>{toastBody}</ToastBody>
      </Toast>
    </div>
  );
};
export default Login;
