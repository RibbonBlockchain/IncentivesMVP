const FixedSupplyToken = artifacts.require("./FixedSupplyToken.sol");

contract('FixedSupplyToken', function(accounts) {

    let tokenInstance;
  
    beforeEach(async () => {
        tokenInstance = await FixedSupplyToken.new()
    })

    it('deploys successfully', async () => {
        const address = await tokenInstance.address;
        assert.notEqual(address, 0x0);
        assert.notEqual(address, '');
        assert.notEqual(address, null);
        assert.notEqual(address, undefined)
    })

    it("Should create specified number of tokens and assign them to contract address", async () => {
        const totalSupply = await tokenInstance.balanceOf.call(accounts[0])

        assert.strictEqual(totalSupply.toNumber(), 1000000, "Total supply of token inaccurate.");

    });

    it("Should transfer tokens to specified address and have correct token balance in smart contract", async () => {

        let tx = await tokenInstance.transfer(accounts[1], 10,
                                    {from: accounts[0]});
    
        assert.strictEqual(tx.receipt.logs.length, 1, "tokenInstance() call did not log 1 event");
        assert.strictEqual(tx.logs.length, 1, "tokenInstance() call did not log 1 event");
        const transferEvent = tx.logs[0];
        assert.strictEqual(transferEvent.event, "Transfer", "tokenInstance() call did not log event Transfer");

        const senderBalance = await tokenInstance.balanceOf.call(accounts[0])
        const recieverBalance = await tokenInstance.balanceOf.call(accounts[1])

        assert.strictEqual(transferEvent.args.tokens.toNumber(), recieverBalance.toNumber(), "transfer member didnot transfer the correct amount of Tokens");
        assert.strictEqual(1000000-10, senderBalance.toNumber(), "transfer member didnot transfer the correct amount of Tokens");
        assert.strictEqual(transferEvent.args.to, accounts[1], "Transfer event emitted incorrect recepient");
    });
});