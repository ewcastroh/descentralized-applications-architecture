const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("EimerFood", function() {

    it("Add a new dish", async function() {
        const [owner, addr1] = await ethers.getSigners();
        const EimerFood = await ethers.getContractFactory("EimerFood");
        const eimerFood = await EimerFood.deploy();
        await eimerFood.deployed();

        var addFood = await eimerFood.addEimerFood("https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg", "Gallo Pinto", "Costa Rica");
        await addFood.wait();
        var addFood2 = await eimerFood.connect(addr1).addEimerFood("https://eatyourworld.com/images/content_images/images/gallo-pinto.jpg", "Gallo Pinto2", "Costa Rica");
        await addFood2.wait();

        var foods = await eimerFood.getAllEimerFoods();
        expect(foods.length).to.equal(2);
        var foodsByOwner = await eimerFood.getEimerFoodsByOwner();
        expect(foodsByOwner.length).to.equal(1);
    });
});