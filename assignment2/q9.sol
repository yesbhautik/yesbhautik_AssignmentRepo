// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// A contract to maintain a ledger of transactions with basic entries
contract SimpleLedger {
    struct Transaction {
        address from;
        address to;
        uint256 amount;
    }

    Transaction[] private transactions;

    // Function to add a transaction to the ledger
    function addTransaction(address to, uint256 amount) public {
        transactions.push(Transaction(msg.sender, to, amount));
    }

    // Function to get a transaction by index
    function getTransaction(uint256 index) public view returns (address, address, uint256) {
        Transaction memory txn = transactions[index];
        return (txn.from, txn.to, txn.amount);
    }
}