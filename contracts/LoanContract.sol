// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Token.sol";

contract LoanContract {
    // Variables
    Token public token;
    address public owner;
    uint256 public interestRate;

    // Events
    event LoanIssued(address indexed borrower, uint256 amount);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    // Constructor
    constructor(address _tokenAddress, uint256 _interestRate) {
        token = Token(_tokenAddress);
        owner = msg.sender;
        interestRate = _interestRate;
    }

    // Issue loan
    function issueLoan(address _borrower, uint256 _amount) external onlyOwner {
        require(token.balanceOf(address(this)) >= _amount, "Insufficient funds");
        token.transfer(_borrower, _amount);
        emit LoanIssued(_borrower, _amount);
    }

    // Repay loan
    function repayLoan(uint256 _amount) external {
        token.transferFrom(msg.sender, address(this), _amount);
    }
}
