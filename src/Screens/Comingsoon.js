import PrimaryButton from '../Elements/Buttons'
import React from 'react'
import "../styles.css";
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const ComingSoon = () => {
  return (
    <>
    <div id='comingsoon'>
      <h1>Lawfully White Construction</h1>
      <h2>Website Coming Soon</h2>
      <LinkContainer to='contact'><Button>Contact-us</Button></LinkContainer>
    </div>
    </>
  )
};

export default ComingSoon