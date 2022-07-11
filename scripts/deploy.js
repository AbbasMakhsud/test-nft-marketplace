const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarket = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarket.deploy();
  await nftMarketplace.deployed();
  console.log("nftMarketplace deployed to:", nftMarketplace.address);

  const NFT = await hre.ethers.getContractFactory("FT");
  const nft = await NFT.deploy(1);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  fs.writeFileSync('./config.js', `
  export const nftmarketaddress = "${nftMarketplace.address}"
  export const nftaddress = "${nft.address}"
`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  