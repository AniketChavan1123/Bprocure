import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  ContractFactory.abi,
  "0x3af6aC8a99D39CDec5f9539630e310C0984D7705"
);
export default instance;
// 0xdA5B5AfA46C2A04cabc2A132D3d35F06F3918b9c
