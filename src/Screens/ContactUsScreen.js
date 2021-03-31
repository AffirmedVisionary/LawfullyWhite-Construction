import React from 'react';
import Header from '../Components/Header';
import ContactForm from '../Components/ContactForm'
import '../styles.css'
import { Col, Container } from 'react-bootstrap'

const ContatUsScreen = () => {
  return (
    <Container>
      <Col md={6}>
        <Header />
        <H2>Contact-Us</H2>
        <p>Use this form to request a quote and other general enquiries</p>
        <ContactForm />
      </Col>
    </Container>
  );
}

export default ContatUsScreen