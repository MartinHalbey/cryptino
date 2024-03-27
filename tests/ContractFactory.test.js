const assert = require('chai').assert;
const ContractFactory = artifacts.require('ContractFactory.sol');

contract('ContractFactory', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await ContractFactory.deployed();
  });

  it('deploys a contract', async () => {
    assert.ok(contractInstance.address);
  });

  it('initializes with correct values', async () => {
    const owner = await contractInstance.owner();
    assert.equal(owner, accounts[0]);
  });

  it('allows adding a new item', async () => {
    const itemName = 'Test Item';
    const itemValue = 100;
    await contractInstance.addItem(itemName, itemValue, { from: accounts[0] });
    const itemCount = await contractInstance.getItemCount();
    assert.equal(itemCount, 1);
  });

 
});
