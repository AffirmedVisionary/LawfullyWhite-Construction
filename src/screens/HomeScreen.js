import React from 'react'
import "../style.css";
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <>
    <div id='homescreen'>
      <h1>Lawfully White Construction</h1>
              <h2>Website Coming Soon</h2>
              <LinkContainer to='/contact'><Button>Contact-us</Button></LinkContainer>
      
    </div>
    </>
  )
};

export default HomeScreen