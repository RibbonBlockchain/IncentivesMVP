import Web3 from "web3";

import { address, ABI } from "./constants/contract";

let getContract = new Promise(function(resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider);
  let contract = web3.eth.Contract(ABI, address);
  resolve(contract);
});

export default getContract;
