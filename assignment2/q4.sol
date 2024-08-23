// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to keep track of a count and allow it to be incremented
contract SimpleCounter {
    uint256 private count;

    // Function to increment the count
    function increment() public {
        count += 1;
    }

    // Function to get the current count
    function getCount() public view returns (uint256) {
        return count;
    }
}