
import './App.css';
import Signup from './signup/signup'
import {AuthProvider} from '../contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Signup/>
      </div>
    </AuthProvider>
  );
}

export default App;
