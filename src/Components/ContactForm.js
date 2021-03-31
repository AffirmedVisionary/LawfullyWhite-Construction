import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'
import axios from 'axios'

const ContactForm = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [result, setResult] = useState(null)

  const sendEmail = event => {
console.log('send button working')
    event.preventDefault();
    axios.defaults.headers.post['content-type'] = 'application/json'
    axios.post('https://formsubmit.co/ajax/construction@lawfullywhite.com', { ...state })
     .then(response => {
       setResult(response.data);
       setState({ name: '', email: '', subject: '', message: '' });
console.log(result)
     })
     .catch(() => {
       setResult({ success: false, message: 'Something went wrong. Try again later'});
   });
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
