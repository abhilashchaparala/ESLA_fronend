import { Route, Switch, Redirect } from "react-router-dom";
import { isAuth } from "../../utils";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Docs from "../Docs/Docs";
import About from "../About/About";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/home">
        {isAuth() || 1 ? <Home /> : <Redirect to="login" />}
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/docs" component={Docs} />
      <Route exact path="/about" component={About} />
      <Redirect to="/home" />
    </Switch>
  );
};

export default Router;
