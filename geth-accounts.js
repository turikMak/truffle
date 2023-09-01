/**
 * @author  cpurta <cpurta@gmail.com>
 * @github https://github.com/cpurta/geth-devnet
 * This code comes from Christopher Purta's `geth-devnet` project.
 * geth --dev seeds with a single account so we need to spin
 * up more accounts and short-circuit account auto-locking to get multi-account
 * tests passing.
 */

function createAccounts() {
