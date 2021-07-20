import Layout from './Component/Layout';
import { Switch, Route } from "react-router-dom";
import Home from "./Admin/Home";
import Workspace from "./Admin/Workspace";
import CreateSurvey from './Admin/CreateSurvey';
import 'antd/dist/antd.css';

function App() {
  return (
   <Switch>
     <Route exact path="/" component={Home} />
     <Layout exact path="/workspace" component={Workspace} isAuthenticated={true}  />
     <Layout exact path="/create" component={CreateSurvey} isAuthenticated={true}  />
   </Switch>
  );
}

export default App;
