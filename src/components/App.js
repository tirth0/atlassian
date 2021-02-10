import './App.css';
import Signup from './signup/signup'
import Dashboard from './dashboard/dashboard'
import {AuthProvider} from '../contexts/AuthContext'
import PrivateRoute from './PrivateRoute'
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar/>
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <PrivateRoute exact path="/" component={Dashboard}></PrivateRoute>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
