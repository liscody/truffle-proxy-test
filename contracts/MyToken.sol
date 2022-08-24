// SPDX-License-Identifier: MIT



// pragma solidity ^0.8.4;
// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// contract MyToken is ERC20 {
//     constructor() ERC20("MyToken", "MTK") {}
// }


pragma solidity 0.8.2;
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
contract MyToken is Initializable, ERC20Upgradeable {
    /// @custom:oz-upgrades-unsafe-allow constructor
    // constructor() {
    //     _disableInitializers();
    // }
    function initialize() initializer public {
        __ERC20_init("MyToken", "MTK");
    }
}