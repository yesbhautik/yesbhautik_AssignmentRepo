// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to store and retrieve a single integer value
contract SimpleStorage {
    uint256 private storedData;

    // Function to set the value
    function set(uint256 x) public {
        storedData = x;
    }

    // Function to get the value
    function get() public view returns (uint256) {
        return storedData;
    }
}