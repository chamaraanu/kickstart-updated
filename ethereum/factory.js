import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  '0x3e1B65F74a66cd3a42B0E20F4b482d3eeD208433'
);

export default instance;
