import Web3 from "web3";
import { address, ABI } from "./constants/contract";

let getWeb3 = new Promise(async function(resolve, reject) {
  let web3;

  if (typeof window.ethereum !== "undefined") {
    try {
      web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      const contract = web3.eth.Contract(ABI, address);
      resolve({ web3, contract });
    } catch (err) {
      reject(new Error("Unable to connect to metamask"));
    }
  } else if (typeof window.web3 !== "undefined") {
    web3 = new Web3(window.web3.currentProvider);
    const contract = web3.eth.Contract(ABI, address);
    resolve({ web3, contract });
  } else {
    reject(new Error("Please install metamask"));
  }
});

export default getWeb3;
