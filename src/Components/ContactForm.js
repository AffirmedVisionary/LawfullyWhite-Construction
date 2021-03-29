import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const sendEmail = (event) => {
    event.preventDefault()

    console.log('We will fill this up shortly.')
    // code to trigger Sending email
  }

  const onInputChange = (event) => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <div>
      <form onSubmit={sendEmail}>
        <Form.Group controlId="name">
          <Form.Label className='label'>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className='label'>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label className='label'>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={state.subject}
            placeholder="Enter subject"
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label className='label'>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default ContactForm
