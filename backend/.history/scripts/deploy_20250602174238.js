async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with account:", deployer.address);

  const MedicineContract = await ethers.getContractFactory("MedicineContract");
  const contract = await MedicineContract.deploy();

  await contract.deployed(); // Wait until deployment is confirmed

  console.log("Deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
