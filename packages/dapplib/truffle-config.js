require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth sad huge hover fortune bone verify'; 
let testAccounts = [
"0x57d0faabb25c124bb5259840c122df45cc073d35980831eb3bbad1ebfb2d8ec3",
"0xf33fda0b1cef5072771e7e12d702795c89decf1d7615240a771205cfd9176855",
"0xad4b1c1b1ad6d063533b95f529a7c141600d2aab3b25d785a9ab515e3a031509",
"0xa82ecc460aca10f78b51c8e3235f44efa751f7a158e07b4b9ae54371628ea268",
"0xda740ee1ec1d12aa56b9ee5804cad63be7240853c237c670fbfebd5ab261460d",
"0x67763286a4dbaeb58c266e1b34eefff4e8e9b1321b8c57b0e95b5d79c6487d6a",
"0x874dfcb5d3cc13b04e3237f3afa6e55d13013f7143834e9ac59df51f0fdbe9d6",
"0x354bcc9da99788fa9254228a43f658ee523711fefad5d23b5c8582435c2cbec7",
"0x534993698dde6258e3f2ce577d572c2e8e55de3e55385c7d0909b0a377c58331",
"0x7a3125a2141d2c31ba808e884f9032c861d5fc887a219c4a65b361575145ace6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

