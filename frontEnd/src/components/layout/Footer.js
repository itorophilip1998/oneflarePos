/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import classNames from "classnames";
import FooterLine from "./partials/FooterLine";

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    // "footer",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <div>
      <div style={{textAlign: 'center'}}>
      @Oneflare 2022
      </div>
          
    </div>
  );
};

export default Footer;
