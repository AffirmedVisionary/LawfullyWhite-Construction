import React from 'react';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';

const ContactScreen = () => {
    return (
      <div className="container">
          <Header />
          <ContactForm />
      </div>
    );
  }


export default ContactScreen
