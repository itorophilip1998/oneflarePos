import React from 'react';
import { Container } from 'react-bootstrap';
// import sections
import PasswordRecovery from '../../components/Auth/PasswordRecovery';

const PasswordRecoveryView = () => {

  return (
    <>
    <Container fluid className='authClass'>
      <PasswordRecovery/>
      </Container>
    </>
  );
}
export default PasswordRecoveryView;