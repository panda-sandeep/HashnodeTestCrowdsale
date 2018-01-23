var HDWalletProvider = require("truffle-hdwallet-provider");
var infura_apikey = "KbQuP7xkP1ZYNhJkUOXF"; // Either use this key or get yours at https://infura.io/signup. It's free.
var mnemonic = "<REPLACE THIS WITH YOUR METAMASK SEED PHRASES>";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      gas: 6500000,
      network_id: "5777"
    },
    ropsten:  {
      provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
      network_id: 3,
      gas: 4500000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};