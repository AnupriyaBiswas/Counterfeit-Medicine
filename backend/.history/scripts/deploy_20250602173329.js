async function main() {
    const [deployer] = await ethers.getSigners();

    const MedicineContract = await ethers.getContractFactory("MedicineContract");
    const contract = await MedicineContract.deploy();

    console.log("Deployed to:", contract.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
