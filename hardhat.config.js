require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    amoy: {
      url: process.env.ALCHEMY_ENDPOINT,
      // accounts: [`0x${process.env.PRIVATE_KEY}`],
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
