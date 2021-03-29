import React from 'react';
// import Header from '../Components/Header';
import ContactForm from '../Components/ContactForm'
import '../styles.css'
import { Col, Container } from 'react-bootstrap'

const ContatUsScreen = () => {
  return (
    <Container>
      <Col md={6}>
        {/* <Header /> */}
        <ContactForm />
      </Col>
    </Container>
  );
}

export default ContatUsScreen