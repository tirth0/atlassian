import './App.css';
import Signup from './signup/signup'
import Dashboard from './dashboard/dashboard'
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route exact path="/" component={Dashboard}></Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
