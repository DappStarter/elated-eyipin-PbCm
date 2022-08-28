require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift razor toss come harvest immense army ghost'; 
let testAccounts = [
"0x7a5596c2f933abcda15ffd21527c85e708e3699927306b6df845f491b808c058",
"0x4720dce3c65ac3d1bf2107033e985299ebf861cd333407f69500aa6d1d7f55a7",
"0xdb0497eae81b82dd974e62fbbb8cb3e4206754aba5416bbcb75a9f65d83cb58d",
"0x33e708b5d9f778b48a60a65ed66a555326d67b05599bab224fd97b0d3a52fbd8",
"0x1e7d052e313ed95efdcbd45d52768441805dd44794685e2349350996c9845553",
"0x8502046ab9082cf187c9676a4b821df45a36324209395b279ce08712237bc269",
"0x79a577790ec454fb2b158654621bb764315ac2abafc481645396baae0be45922",
"0x7414a8037429bfd149805534d000507cbc58bdeaa207033f78a045b23849196c",
"0x8855092a1ea4e52f401ea498802aecb561a882d8358359b3ffe9379df6c7e869",
"0xf0c060c9a710cc9f38627ee1a4fa22fb7c2ef43c0134e092f72a67c2fbccb4e7"
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

