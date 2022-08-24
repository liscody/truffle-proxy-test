const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
require("dotenv").config()

module.exports = { 
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    OKLink: process.env.OKLinkPIKEY
  },
  compilers: {
    solc: {
      version: "0.8.2",      // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
      //  evmVersion: "byzantium"
      }
    }
  },
  networks: {
    okc: {
      provider: function() {
        return new HDWalletProvider
        (mnemonic, 'https://exchaintestrpc.okex.org');
      },
      network_id: 65,      // Ropsten's id
      // confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
      // production: true    // Treats this network as if it was a public net. (default: false)
    }, 
    rinkeby: {
        provider: function() { 
         return new HDWalletProvider
         (mnemonic, process.env.RINKEBY_URL);
        },
        network_id: 4,
        gas: 29970620,
        gasPrice: 10000000000,
    }  
  },
  mocha: {
    timeout: 100000
  },
};


































    // okc: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://exchaintestrpc.okex.org`),
    //   network_id: 65,      // Ropsten's id
    //   confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
    //   timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    //   skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },

