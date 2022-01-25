import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import FooterCatIcon from './FooterCatIcon';
import FooterAirIcon from './FooterAirIcon';

const ContactInfo = styled.div`
  padding-top: 2em;
`;

const FooterIcon = styled.span`
  padding: 0 1em;
`;

function Footer() {
  return (
    <Wrapper>
      <FooterIcon><FooterCatIcon></FooterCatIcon></FooterIcon>
      <FooterIcon><FooterAirIcon></FooterAirIcon></FooterIcon>
      <ContactInfo>
        info@hongbao.farm
      </ContactInfo>
    </Wrapper>
  );
}

export default Footer;
