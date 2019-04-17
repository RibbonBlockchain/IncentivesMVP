let RibbonIncentivesContract = require("../contracts/token/ERC20/ERC20Detailed.sol");

module.exports = function(deployer) {
  deployer.deploy(RibbonIncentivesContract);
};
