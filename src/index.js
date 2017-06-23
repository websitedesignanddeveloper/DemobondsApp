import React, { Component}  from 'react';
import ReactDOM from 'react-dom';
import http from 'http';
import getWeb3 from './utils/getWeb3'
import { default as Web3 } from 'web3';
import { default as Contract } from './contract.js'
import './index.css';

var web3 = new Web3(new Web3.providers.HttpProvider("http://52.179.18.34:8545"));
//console.log(web3);

var contract = web3.eth.contract(Contract.abi);
var bondContract = contract.at(Contract.address);
var res = bondContract.totalBonds();
var res2 = bondContract.nBonds();
console.log(res['c']);
console.log(res2['c'])
// set the default block

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value_nbonds: event.target.value});
  }
  
  handleClick(event) {
    this.setState({value_nbonds: res['c']});
    this.setState({value_limitbonds: res2['c']});
  }
  
  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value1);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <label>nBonds:</label>
          <input type="text" value={this.state.value_nbonds} onChange={this.handleChange} />
		<label>limitBonds:</label>
          <input type="text" value={this.state.value_limitbonds} onChange={this.handleChange} />
		<input type="submit" value="Submit" onClick={this.handleClick} />
       
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);