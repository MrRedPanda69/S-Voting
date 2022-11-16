const { ethers } = require("hardhat")

async function vote() {
  const voting = await ethers.getContract("Voting");
  await voting.vote(1);
  console.log("Voted!");
}

vote()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });