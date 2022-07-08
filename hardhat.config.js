/* hardhat.config.js */
require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
  mainnet: {
    url: 'https://mainnet.infura.io/v3/91979eb4452e4a33b7d5a8f4b23b0a49',
    accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}