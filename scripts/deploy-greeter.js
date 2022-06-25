const hre = require("hardhat");
const Greeter = require("../src/artifacts/contracts/Greeter.sol/Greeter.json");

async function main() {
  const GreeterFac = await hre.ethers.getContractFactory("Greeter");
  const greeter = await GreeterFac.deploy("Hello, Hardhat!");

  await greeter.deployed();

  console.log("Greeter ABI:", Greeter.abi);
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
