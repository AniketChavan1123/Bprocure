import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  ContractFactory.abi,
  "0x5901dA46585B7C670A25342B1323c5dFb190CF0B"
);
export default instance;
// 0xdA5B5AfA46C2A04cabc2A132D3d35F06F3918b9c
