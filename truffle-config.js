var HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "swift cabbage urge shield item fee rare cabin rude prepare lucky sugar";

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    },
	// Configuration for mainnet
    mainnet: {
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/ccd0c2063aec420a8644f70a425282a8")
      },
      network_id: "1"
    },
    // Configuration for rinkeby network
    rinkeby: {
      // Special function to setup the provider
      provider: function () {
        // Setting the provider with the Infura Rinkeby address and Token
        return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/ccd0c2063aec420a8644f70a425282a8")
      },
      network_id: "4" //Fill in the `network_id` for the Rinkeby network.
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
