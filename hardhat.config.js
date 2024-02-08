require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    mumbai: {
      url: "https://polygon-mumbai-bor.publicnode.com",
      chainId: 80001,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  etherscan: {
    apiKey: "7XBNM7I42PJW8NP8GDT1475CTC6BRBAXMZ",//polygon
  },
  paths: {
    sources: "./contracts",
    artifacts: "./frontend/src/abis",
  },

  mocha: {
    timeout: 20000,
  },
};
