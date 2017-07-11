/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import H3 from 'components/H3';
import messages from './messages';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import Img from './Img';
import Banner from './amity-text-logo.png';
import Button from './Button';
import { changeUsername } from './actions';
import Form from './Form';
import Input from './Input';

const InnerWrapper = styled.div`
  width:100%;
  margin: 0 auto;
  padding: 1em 0;
  text-align: center;
`;
const textsection = styled.div`
  width:100%;
  margin-top:1em;	
`;
const P = styled.p`
  color:#95989a;
  text-align: left;	
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet
          title="Landing Page"
          meta={[
            { name: 'description', content: 'Amity is a social rewards platform for humanitarian effort.' },
          ]}
        />
		<Flex wrap>
  			<Box p={3} width={[ 1, 2/3, 1/2 ]} m='auto'>
				<InnerWrapper>
					<Img src={Banner} alt="react-boilerplate - Logo" />
					<H2>Because everyone needs a caring friends</H2>
					<textsection>
						<H3>Make friends and earn rewards by helping others with Amity</H3>
						<P>- Help others discover your passion</P>
						<P>- Work together to make the world a better place</P>
						<P>- Build friendships that will last a lifetime </P>
					</textsection>
					 <Form action="https://tech.us13.list-manage.com/subscribe/post?u=63452b36a43408f881e5b0233&amp;id=3e4277ea5f">
					  <label htmlFor="username">
						
						<Input
						  id="b_email"
						  type="text"
						  placeholder="Email"
						  name="b_email"  
						/>
					  </label>
					  <input type="hidden" name="mc_signupsource" value="hosted" />
						  <Button
        					className="btn btn-default"
       					 	//style={buttonStyle}
        					>Join the mailing list</Button>
					  <input type="hidden" name="ht" value="781bd95c71f727267e28213e815edcee2b393b8e:MTQ5OTc3NjU0Ni44NDM3" />
    				  <input type="hidden" name="mc_signupsource" value="hosted" />
					</Form>
				</InnerWrapper>
			</Box>
		</Flex>	
      </div>
    );
  }
}

/*subscribe(event) {
  event.preventDefault();
  axios({
    url: 'https://tech.us13.list-manage.com/subscribe/post',
    method: 'post',
    data: this.state,
    dataType: 'json'
  })
  .then(() => {
    console.log('success');
  });
}*/