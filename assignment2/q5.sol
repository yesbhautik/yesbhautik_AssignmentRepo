// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to store and retrieve a user's name
contract NameStorage {
    string private name;

    // Function to set the name
    function setName(string memory _name) public {
        name = _name;
    }

    // Function to get the name
    function getName() public view returns (string memory) {
        return name;
    }
}