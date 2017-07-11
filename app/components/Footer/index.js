import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import license from './license';
import messages from './messages';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';


const Licensetext = styled.div`
  color:#888;
  @media (max-width: 767px) {
		font-size: 12px;
	}
  
`;


function Footer() {
  return (
  <Flex wrap>
  	<Box p={1} width={[ 1, 1, 1 ]} m='auto'>
		<Wrapper>
		  
			<Licensetext>AMITY<sup>TM</sup> Copyright 2017 Borderless Charity, Inc 501(c)3.</Licensetext>
		  
		</Wrapper>
	 </Box>
	</Flex>
  );
}

export default Footer;
