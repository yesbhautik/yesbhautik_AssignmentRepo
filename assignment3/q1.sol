// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Lottery {
    address public manager;
    address payable[] public participants;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value == 0.1 ether, "Entry requires exactly 0.1 Ether");
        participants.push(payable(msg.sender));
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, participants.length)));
    }

    function pickWinner() public restricted {
        require(participants.length >= 3, "Not enough participants");

        uint index = random() % participants.length;
        participants[index].transfer(address(this).balance);

        // Reset the lottery for the next round
        participants = new address payable[](0);
    }

    modifier restricted() {
        require(msg.sender == manager, "This function is restricted to the contract's manager");
        _;
    }

    function getParticipants() public view returns (address payable[] memory) {
        return participants;
    }
}