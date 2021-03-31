import PrimaryButton from '../Elements/Buttons'
import React from 'react'
import "../styles.css";
import { Button, ButtonGroup, Image } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const ComingSoon = () => {
  return (
    <>
      <div id='comingsoon'>
        <Image src='../../public/logo512.png' alt='Lawfully White Construction Logo' />
        <h1>Lawfully White Construction</h1>
        <h2>Website Coming Soon</h2>
        <ButtonGroup>
          <LinkContainer to='contact'><Button>Contact-us</Button></LinkContainer>
          <LinkContainer to='trade-register'><Button>Register Your Trade</Button></LinkContainer>
        </ButtonGroup>
    </div>
    </>
  )
};

export default ComingSoon