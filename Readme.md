## deploy
truffle migrate --network rinkeby

## contracts deploy
1_deploy_MyToken.js
===================

   Deploying 'MyToken'
   -------------------
   > transaction hash:    0xa299c96d6fb2923d150da36155d0d113d0d69bba97aeeb4a4b41688b8d555434
   > contract address:    0x827830De4464D6a5E48a5918A9a6060E517D6b99

   Deploying 'ProxyAdmin'
   ----------------------
   > transaction hash:    0x905feda00768afbf5977df511f9f02a309e981e5e3afda785e01f33f840c87e3
   > contract address:    0xFF081a57117F56E95f018417Ccf90cB673bef9df

   Deploying 'TransparentUpgradeableProxy'
   ---------------------------------------
   > transaction hash:    0xc24eb95f56e922f692cea7e74ecb44b37e5a40bfb4f1efab3e3962ada4a4b40e
   > contract address:    0x2Cc39eF1DD4B17A3C529D306627B8bE4bFF410f5

## verification 

Call command

truffle-flattener ./contracts/PayRueERC721.sol > PayRueERC721Flattened.sol
truffle-flattener ./node_modules/@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol > ProxyAdminFlattened.sol
truffle-flattener ./node_modules/@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol > TransparentUpgradeableProxyFlattened.sol

contract ProxyAdminFlattened.sol contained 11 contracts but as you can see at https://rinkeby.etherscan.io/address/0xFF081a57117F56E95f018417Ccf90cB673bef9df#code just 10 contracts.



I need to 

