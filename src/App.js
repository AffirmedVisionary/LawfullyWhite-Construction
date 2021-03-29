import "./styles.css";
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ComingSoon from './Screens/Comingsoon'
import { Container } from "react-bootstrap";
import ContactUsScreen from './Screens/ContactUsScreen'
export default function App() {
  return (
    <Router>
      <main>
        <Container>
        <Route path='/' component={ComingSoon} exact/>
        <Route path='/contact-us' component={ContactUsScreen} exact/>
        </Container>
      </main>
    </Router>
  );
}
