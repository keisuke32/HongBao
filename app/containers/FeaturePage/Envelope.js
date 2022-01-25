/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React from 'react';
 import styled from 'styled-components';
 import EnvelopeImage from '../../images/envelope.png';
 
 const EnvelopeWrapper = styled.div`
    position: relative;
    width: fit-content;
 `;

 const PriceWrapper = styled.span`
    position: absolute;
    color: white;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 1px;
    text-align: center;
    @media only screen and (max-width: 1300px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1000px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 12px;
    }
 `;

 const CountWrapper = styled.span`
    position: absolute;
    color: white;
    font-size: 24px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 1px;
    text-align: center;
    @media only screen and (max-width: 1300px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 1000px) {
      font-size: 12px;
    }
    @media only screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media only screen and (max-width: 500px) {
      font-size: 16px;
    }
    @media only screen and (max-width: 400px) {
      font-size: 12px;
    }
 `;
 
  export default function Envelope(props) {
    return (
      <EnvelopeWrapper>
          <img src={EnvelopeImage} alt="envelope - Logo" width="100%" />
          <PriceWrapper>
              ${props.price}
          </PriceWrapper>
          <CountWrapper>
            红包: {props.count}个
          </CountWrapper>
      </EnvelopeWrapper>
    );
  } 