import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import styled from 'styled-components';

const abc = styled.div`
    display: none;
`;
const HeaderWrapper = styled.div`
 width:calc(700px + 16px * 2);
  margin: 0 auto;
  display: none;
  justify-content: space-between;
  padding: 1em 0;
`;

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper >
        <A href="https://twitter.com/mxstbr">
          <Img src={Banner} alt="react-boilerplate - Logo" />
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </HeaderWrapper>
    );
  }
}

export default Header;
