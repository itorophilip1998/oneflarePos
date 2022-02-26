import React from 'react';
import { Container } from 'react-bootstrap';
// import sections
import Registration from '../../components/Auth/Registration';

const RegistrationView = () => {

  return (
    <>
    <Container fluid className='authClass'>
      <Registration/>
      </Container>
    </>
  );
}
export default RegistrationView;