const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x068e297e8FF74115C9E1C4b5B83B700FdA5aFdEB";

const tokens = [
  nullAddress,
  "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70", // DAI
  "0x2b2C81e08f1Af8835a78Bb2A90AE924ACE0eA4bE", // sAVAX
  "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E", // USDC
  "0xc7198437980c041c805A1EDcbA50c1Ce5db95118", // USDT.e
  "0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39", // BUSD
  "0x152b9d0FdC40C096757F570A51E494bd4b943E50", // BTC.b
  "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7", // USDt
  "0xF7D9281e8e363584973F946201b82ba72C965D27", // yyAVAX
  "0x6e84a6216eA6dACC71eE8E6b0a5B7322EEbC0fDd", // JOE
  "0x026187BdbC6b751003517bcb30Ac7817D5B766f8", // H2O
  "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", // WAVAX
  "0x8729438EB15e2C8B576fCc6AeCdA6A148776C0F5", // QI
  "0xd9D90f882CDdD6063959A9d837B05Cb748718A05", // MORE
  "0x77777777777d4554c39223C354A05825b2E8Faa3", // YETI
];

const ownTokens = [
  "0x22d4002028f537599bE9f666d1c4Fa138522f9c8", // PTP
];

module.exports = treasuryExports({
  avax: {
    tokens,
    owners: [treasury],
    ownTokens,
  },
});
