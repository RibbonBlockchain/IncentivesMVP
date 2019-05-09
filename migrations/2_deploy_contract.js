const FixedSupplyToken = artifacts.require("FixedSupplyToken");

module.exports = function(deployer) {
  deployer.deploy(FixedSupplyToken);
};
