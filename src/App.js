import { useEffect } from 'react';
import Layout from './Component/Layout';
import { Switch, Route } from "react-router-dom";
import Home from "./Admin/Home";
import Workspace from "./Admin/Workspace";
import CreateSurvey from './Admin/CreateSurvey';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./firebase"
import 'antd/dist/antd.css';
import Login from './Admin/Login';
import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import Loading from './Component/Loading';
import PreviewPage from './Component/PreviewPage';
import Thankyou from './Component/Thankyou';
import SignUp from './User/SignUp';

function App() {
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      db.collection('users').doc(user.uid).set({
          email: user.email,
          lastSeen: Date.now(),
          photoURL: user.photoURL,
        },
          { merge: true }
        );
    }
  }, [user]);

  return (
   <Switch>
     <Route exact path="/" render={props => {
       if (loading) {
         return <Loading />
       } else {
        return <Home {...props} user={user} />
       }
     }} />
     
     <Route exact path="/linkedin" component={LinkedInPopUp} />
      <Route path="/signup" component={SignUp} />
     <Route exact path="/login" render={props => <Login {...props} user={user} />} />
     <Route exact path="/thank-you" render={props => <Thankyou {...props} />} />
     <Route exact path="/survey/:surveyID" render={props => <PreviewPage {...props} />} />
     <Layout exact loading={loading} path="/workspace" component={Workspace} isAuthenticated={user}  />
     <Layout exact loading={loading} path="/create/:id" component={CreateSurvey} isAuthenticated={user}  />
   </Switch>
  );
}

export default App;
