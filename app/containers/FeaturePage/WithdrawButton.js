/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

 import React from 'react';
 import styled from 'styled-components';
 import background from '../../images/withdraw-back.png';
 import EnvelopeButton from '../../images/button.png';
 
 const WithdrawWrapper = styled.div`
     background-image: url(${background});
     background-size: 100% 100%;
     width: 100%;
     height: 9em;
     position: relative;
     @media only screen and (max-width: 1700px) {
      height: 7em;
     }
     @media only screen and (max-width: 1000px) {
      height: 5em;
     }
     @media only screen and (max-width: 768px) {
      height: 5em;
     }
 `;

 const HongbaoOpenEnvelope = styled.button`
  border: 0;
  background-image: url(${EnvelopeButton});
  background-size: inherit;
  width: 40%;
  height: 75px;
  font-size: 32px;
  color: white;
  background-color: transparent;
  position: absolute;
  right: 35px;
  margin-top: 34px;
  @media only screen and (max-width: 1700px) {
    height: 57px;
    right: 18px;
    margin-top: 28px;
   }
  @media only screen and (max-width: 1000px) {
    height: 40px;
    right: 17px;
    margin-top: 20px;
    font-size: 24px;
  }
  @media only screen and (max-width: 900px) {
    right: 15px;
  }
  @media only screen and (max-width: 768px) {
    right: 18px;
    margin-top: 20px;
    height: 40px;
    width: 30%;
    font-size: 22px;
   }
`;

const HongbaoPrice = styled.span`
     color: #C20C01;
     font-size: 48px;
     position: absolute;
     left: 100px;
     top: 35px;
     @media only screen and (max-width: 1700px) {
      font-size: 36px;
      top: 30px;
     }
     @media only screen and (max-width: 1300px) {
      font-size: 36px;
      top: 30px;
      left: 50px;
     }
     @media only screen and (max-width: 1100px) {
      font-size: 32px;
      top: 33px;
      left: 50px;
     }
     @media only screen and (max-width: 1000px) {
      font-size: 24px;
      top: 23px;
      left: 30px;
     }
     @media only screen and (max-width: 768px) {
      left: 100px;
      top: 18px;
      font-size: 28px;
     }
`;
 
  export default function WithdrawButton(props) {
    return (
      <WithdrawWrapper>
          <HongbaoPrice>{props.price}USDT</HongbaoPrice>
          <HongbaoOpenEnvelope>提现</HongbaoOpenEnvelope>
      </WithdrawWrapper>
    );
  } 