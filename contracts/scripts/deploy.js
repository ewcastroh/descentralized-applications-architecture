const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const EimerFood = await hre.ethers.getContractFactory("EimerFood");
    const eimerFood = await EimerFood.deploy();

    await eimerFood.deployed();
    console.log(`EimerFood deployed to ${eimerFood.address}`);

    let config = `export const abiEimerFoodAddress = "${eimerFood.address}"`;

    let data = JSON.stringify(config);
    fs.writeFileSync("../web/config.js", JSON.parse(data));

    fs.copyFile(
        "./artifacts/contracts/EimerFood.sol/EimerFood.json",
        "../web/utils/abi/EimerFood.json",
        (err) => {
            if (err) {
                console.log("Error Occurred:", err);
            }
        }
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});