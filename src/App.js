import './App.css';
import { Content, NavbarComponent } from './templates'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavbarComponent />
        <div className="auth-wrapper">
          <div className="auth-inner">         
            <Content />
          </div>
      </div>
    </div>
      </Router>
  );
}

export default App;
