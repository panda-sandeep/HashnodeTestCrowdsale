var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "KbQuP7xkP1ZYNhJkUOXF";
var mnemonic = "choose outside situate equip fortune outdoor swap region trip frown daughter figure";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777", // Match any network id,
      from: '0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef'
    },
    ropsten:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      network_id: 3,
      gas: 4600000
    }
  }
};