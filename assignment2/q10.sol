// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to allow a user to store and retrieve a message string
contract MessageStorage {
    string private message;

    // Function to set the message
    function setMessage(string memory _message) public {
        message = _message;
    }

    // Function to get the message
    function getMessage() public view returns (string memory) {
        return message;
    }
}