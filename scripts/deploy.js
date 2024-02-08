const hre = require("hardhat");

async function main() {
  // Get the deployer's address
  const [deployer] = await hre.ethers.getSigners();

  // Deploy the first contract
  const Token1 = await hre.ethers.getContractFactory("Token1");
  const token1 = await Token1.deploy(deployer.address);
  await token1.deployed();
  console.log(`Token1 deployed to: ${token1.address}`);

  // Deploy the second contract
  const Token2 = await hre.ethers.getContractFactory("Token2");
  const token2 = await Token2.deploy(deployer.address);
  await token2.deployed();
  console.log(`Token2 deployed to: ${token2.address}`);

  // Deploy the third contract
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(deployer.address);
  await nft.deployed();
  console.log(`NFT deployed to: ${nft.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
