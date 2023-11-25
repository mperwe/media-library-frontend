import React from 'react'
import styled from "styled-components";

const ContactInfo = styled.div`
  margin-top: 10px;
`;

const SocialMediaLinks = styled.div`
  margin-top: 10px;
`;

const FooterContainer = styled.div`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Footer = () => {
  return (
      <FooterContainer>
        © {new Date().getFullYear()} Frank's Movie Room. All rights reserved.
        <ContactInfo> Tell: +49 1523 5867655 | +256 759 555517 </ContactInfo>
          <SocialMediaLinks>
          Follow us:
          <a href="mailto:info@franksmovieroom.com">frankmperwe@gmail.com</a>
          <a href="https://twitter.com/franksmovieroom" target="_blank" rel="noopener noreferrer">mperwefrank</a>
          </SocialMediaLinks>
      </FooterContainer>
  )
}

export default Footer;