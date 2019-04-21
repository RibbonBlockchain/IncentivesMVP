import Web3 from "web3";

const web3 = new Web3(window.web3.currentProvider);
web3.eth.defaultAccount = "0x1dE929D52B94A06F21d57dAFE202D36C6CA71C7a";

console.log('default ', web3.eth)

export default web3;
