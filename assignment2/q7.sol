// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to restrict certain functions to only the contract owner
contract OwnerAccess {
    address private owner;

    // Set the contract deployer as the owner
    constructor() {
        owner = msg.sender;
    }

    // Modifier to restrict access to owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    // Example function restricted to owner
    function restrictedFunction() public onlyOwner {
        // Function logic
    }
}