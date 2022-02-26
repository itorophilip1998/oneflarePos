import React from 'react';
import { Container } from 'react-bootstrap';
// import sections
import Login from '../../components/Auth/Login';

const LoginView = () => {

  return (
    <>
    <Container fluid className='authClass'>
      <Login/>
      </Container>
    </>
  );
}
export default LoginView;