var HashnodeCrowdsale = artifacts.require("./HashnodeCrowdsale.sol");

module.exports = function(deployer) {
  const startTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp + 1;
  deployer.deploy(HashnodeCrowdsale, startTime, startTime + (86400 * 20), 2, "0x627306090abaB3A6e1400e9345bC60c78a8BEf57", 2000000000000000000, 20000000000000000000);
};
