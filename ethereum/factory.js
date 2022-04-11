import web3 from "./web3";
import ContractFactory from "./build/ContractFactory.json";

const instance = new web3.eth.Contract(
  ContractFactory.abi,
  "0x9Df4F6882FDF78F25a5c1d1633EE4fEF538eef4b"
);
export default instance;
// 0xdA5B5AfA46C2A04cabc2A132D3d35F06F3918b9c
