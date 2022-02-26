import React from 'react';
import Image from "../elements/Image";

const Logo = () => {
  return (
    <Image
    src={require('../../assets/images/onFlare/Logo/logo.svg')}
    alt="Open"
    className="img-fluid"
    // width={100}
  />
  );
}
export default Logo;