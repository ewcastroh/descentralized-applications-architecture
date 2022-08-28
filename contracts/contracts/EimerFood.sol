//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract EimerFood {
    constructor() {}

    struct EimerFoodItem {
        address owner;
        string foodUrl;
        string foodName;
        string originCountry;
    }

    EimerFoodItem[] private eimerFoods;

    function addEimerFood(
        string memory foodUrl,
        string memory foodName,
        string memory originCountry
    ) public {
        eimerFoods.push(
            EimerFoodItem(msg.sender, foodUrl, foodName, originCountry)
        );
    }

    function getAllEimerFoods() public view returns (EimerFoodItem[] memory) {
        return eimerFoods;
    }

    function getEimerFoodsByOwner()
        public
        view
        returns (EimerFoodItem[] memory)
    {
        uint256 itemCount = 0;

        for (uint256 i = 0; i < eimerFoods.length; i++) {
            if (eimerFoods[i].owner == msg.sender) {
                itemCount += 1;
            }
        }

        EimerFoodItem[] memory myfoods = new EimerFoodItem[](itemCount);
        uint256 nextPosition = 0;
        for (uint256 i = 0; i < eimerFoods.length; i++) {
            if (eimerFoods[i].owner == msg.sender) {
                myfoods[i] = eimerFoods[i];
                nextPosition += 1;
            }
        }

        return myfoods;
    }
}