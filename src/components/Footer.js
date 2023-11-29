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
       CONTACT US:
        <ContactInfo> Tell: +49 1523 5867655 | +256 759 555517 </ContactInfo>
        <ContactInfo> Email: frankmperwe@gmail.com</ContactInfo>
          <SocialMediaLinks>
          Follow us:
        <ContactInfo> twitter: @mperwefrank </ContactInfo>
        © {new Date().getFullYear()} Frank's Movie Room. All rights reserved.
               
          </SocialMediaLinks>
      </FooterContainer>
  )
}

export default Footer;