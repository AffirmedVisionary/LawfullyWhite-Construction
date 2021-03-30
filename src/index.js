import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import ContactScreen from './screens/ContactScreen';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="container">
        <div className="col-md-6 offset-md-3">
            <ContactScreen />
        </div>
        </div>
        </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
