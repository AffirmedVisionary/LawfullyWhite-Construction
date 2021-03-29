import Button from 'react-bootstrap/Button'
import React from 'react'


const PrimaryButton = () => {
  return (
    <>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
  )
};

export default PrimaryButton;