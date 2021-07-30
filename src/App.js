import { Route, Switch } from "react-router-dom";
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import SignUp from "./Page/SignUp";

function App() {
  return (
    <Switch >
      <Route exact path="/linkedin" component={LinkedInPopUp} />
      <Route path="/" component={SignUp} />
    </Switch>
  );
}

export default App;
