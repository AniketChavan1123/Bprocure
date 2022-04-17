import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  ContractFactory.abi,
  "0x13b788bd121d6B83e77ABe2aC4DD9e4Cd93Fed0C"
);
export default instance;
// 0xdA5B5AfA46C2A04cabc2A132D3d35F06F3918b9c
