// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A simple contract to return "Hello, World!"
contract HelloWorld {
    // Function to return the message
    function getMessage() public pure returns (string memory) {
        return "Hello, World!";
    }
}