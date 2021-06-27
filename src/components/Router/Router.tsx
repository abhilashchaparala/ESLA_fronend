import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuth } from "../../utils";
import Home from "../Home/Home";
import Login from "../Login/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          {isAuth() ? <Home /> : <Redirect to="login" />}
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
