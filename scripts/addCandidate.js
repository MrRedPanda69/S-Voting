const { ethers } = require("hardhat")

async function addCandidate() {
  const voting = await ethers.getContract("Voting");
  await voting.addCandidate("Enrique", "Cordoba", "FIME");
  console.log("Added!");
}

addCandidate()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });