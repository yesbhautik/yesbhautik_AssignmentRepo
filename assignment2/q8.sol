// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to log events when certain actions are performed
contract EventLogging {
    event ActionPerformed(address indexed performer, string action);

    // Function to perform an action and log the event
    function performAction(string memory action) public {
        emit ActionPerformed(msg.sender, action);
    }
}