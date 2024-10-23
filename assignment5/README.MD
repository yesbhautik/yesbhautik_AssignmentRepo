### 1. Crowdfunding Contract

This Solidity smart contract allows users to create and participate in crowdfunding campaigns. The contract includes the following features:

- **Create Campaign**: Users can create a new crowdfunding campaign with a target amount and a deadline.
- **Contribute Funds**: Participants can contribute funds to active campaigns.
- **Track Contributions**: The contract tracks the total contributions for each campaign.
- **Finalize Campaign**: 
  - If the target amount is met by the deadline, the funds are released to the campaign creator.
  - If the target is not met, contributors can withdraw their funds.

### 2. Voting System Contract

This Solidity smart contract implements a voting system with the following features:

- **Propose Options**: Users can propose new options for voting.
- **Cast Votes**: Participants can cast their votes on the available proposals.
- **View Results**: Users can view the current results of the voting.
- **Single Vote Per Address**: Each address can vote only once per proposal.
- **Determine Winner**: A function to determine the winning proposal based on the highest number of votes.

### How to Use

1. **Deploy the Contracts**: Deploy the Crowdfunding and Voting System contracts to the Ethereum network.
2. **Interact with the Contracts**: Use a web3 interface or a dApp to interact with the deployed contracts.
3. **Create Campaigns and Proposals**: Users can create crowdfunding campaigns and propose new voting options.
4. **Participate**: Contribute to campaigns and cast votes on proposals.
5. **Finalize and Withdraw**: Finalize campaigns and withdraw funds if necessary, and determine the winning proposals.

### Prerequisites

- Solidity Compiler
- Ethereum Wallet (e.g., MetaMask)
- Web3 Interface (e.g., Remix IDE)

### Installation

1. Clone the repository.
2. Open the project in your preferred Solidity development environment.
3. Compile the contracts using the Solidity compiler.
4. Deploy the contracts to the Ethereum network.

### License

This project is licensed under the MIT License.