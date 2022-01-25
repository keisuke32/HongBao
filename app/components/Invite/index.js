/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import Searchbox from './Searchbox';

const InviteWrapper = styled.div`
    padding-top: 2em;
    @media only screen and (max-width: 768px) {
      padding-top: 0;
    }
`;

const HongbaoTitle = styled.h1`
 font-size: 36px;
 color: white;
 text-align: center;
 @media only screen and (max-width: 768px) {
  font-size: 24px;
 }
`;

 export default function Invite() {
   return (
     <InviteWrapper>
        <HongbaoTitle>
            邀请越多人参与您获得的奖金越多
        </HongbaoTitle>
        <Searchbox />
     </InviteWrapper>
   );
 } 