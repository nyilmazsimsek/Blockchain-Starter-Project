const hre = require("hardhat");

async function main() {

  const YourContract = await hre.ethers.getContractFactory("YourContract");
  const yourContract = await YourContract.deploy("data");
  await yourContract.deployed();
  console.log("YourContract deployed to:", yourContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
