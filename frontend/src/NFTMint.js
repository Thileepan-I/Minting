// Token1Mint.js
import { useContractWrite, useAccount } from 'wagmi';
import abi from './abis/contracts/NFT.sol/NFT.json';

export function NFTMint() {
  const { address } = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x7971744cd9015Bfb08FcBDd162b22A8dea1618Fc',
    account: '0x316adBe2505856d4c4D67573dC6b6648453faEa9',
    abi: abi.abi,
    functionName: 'safeMint',
    args: [address],
  });

  return (
    <div>
      <button onClick={() => write()}>Mint NFT</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
