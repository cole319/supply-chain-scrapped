// const hre = require("hardhat");
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// async function main() {
//   const supplyChain = await hre.ethers.deployContract("SupplyChain");

//   await supplyChain.waitForDeployment();

//   console.log(`SupplyChain Contract deployed at ${supplyChain.target}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

module.exports = buildModule("SupplyChain", (m) => {
  const supplyChain = m.contract("SupplyChain");
  return { supplyChain };
});
