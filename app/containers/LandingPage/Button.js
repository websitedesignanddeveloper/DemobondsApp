import styled from 'styled-components';

export default styled.button`
	display: -webkit-box;
    display: -moz-box;
    display: -ms-inline-flexbox;
    display: -webkit-inline-flex;
    display: inline-flex;
    padding: 1.1em 1.3em;
    margin: 0em 1em;
    text-decoration: none;
    border-radius: 30px;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 15px;
    border: 1px solid #95989a;
    color: #b3b3b3;
  	@media (max-width: 767px) {
		margin-top: 33px;
   }
  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
