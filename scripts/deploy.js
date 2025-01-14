const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Bank = await hre.ethers.getContractFactory("DecentralizedBank");
    
    const bank = await Bank.deploy(deployer.address);

    await bank.waitForDeployment();

    console.log(`DecentralizedBank deployed to: ${await bank.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
