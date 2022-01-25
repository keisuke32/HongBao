import React, {useState} from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import LinkButton from './LinkButton';
import Banner from '../../images/logo.png';
import messages from './messages';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 0 auto;
  padding: 1em 0;
  @media only screen and (max-width: 1300px) {
    width: 80%;
  }
  @media only screen and (max-width: 1200px) {
    width: 90%;
  }
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
`;

function Header() {

  const [active, setActive] = useState(1);

  return (
    <HeaderWrapper>
      <A href="/">
        <Img src={Banner} alt="hongbao - Logo" />
      </A>
      <NavBar>
        <div>
          <HeaderLink to="/" className={active==1&&'active'} onClick={() => setActive(1)}>
            <FormattedMessage {...messages.homepage} />
          </HeaderLink>
          <HeaderLink to="/features" className={active==2&&'active'} onClick={() => setActive(2)}>
            <FormattedMessage {...messages.hongbao} />
          </HeaderLink>
        </div>
        <LinkButton to="/">
          <FormattedMessage {...messages.wallet} />
        </LinkButton>
      </NavBar>
    </HeaderWrapper>
  );
}

export default Header;
