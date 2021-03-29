import "./styles.css";
import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import ComingSoon from './Screens/Comingsoon'
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <main>
        <Container>
        <Route path='/' component={ComingSoon} />
        </Container>
      </main>
    </Router>
  );
}
