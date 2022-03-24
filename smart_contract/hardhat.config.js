const { ACCOUNT_KEY } = require("./env");

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/2B5zB7ukt_zh_V69DhYowcamoMk-IET8",
      accounts: [ACCOUNT_KEY],
    },
  },
};
