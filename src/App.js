import './styles.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ComingSoon from './Screens/Comingsoon'
import { Container } from 'react-bootstrap'
// import ContactUsScreen from './Screens/ContactUsScreen'
import ContactForm from './Components/ContactForm'
export default function App() {
  return (
    <Router>
      <main>
        <Container>
          <Route path='/' component={ComingSoon} exact />
          <Route path='/contact' component={ContactForm} exact />
        </Container>
      </main>
    </Router>
  )
}
