import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  ContractFactory.abi,
  "0x70810470112483042e3bc539a16D1c69E398b2D0"
);
export default instance;
// 0xdA5B5AfA46C2A04cabc2A132D3d35F06F3918b9c
