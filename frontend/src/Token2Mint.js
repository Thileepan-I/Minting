// Token1Mint.js
import { useContractWrite, useAccount } from 'wagmi';
import abi from './abis/contracts/Token2.sol/Token2.json';

export function Token2Mint() {
  const { address } = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0xD6DbB4bd1BfAEeD0A42817B44a0e67c2c4848c17',
    account: '0x316adBe2505856d4c4D67573dC6b6648453faEa9',
    abi: abi.abi,
    functionName: 'mint',
    args: [address, 30*1e18],
  });

  return (
    <div>
      <button onClick={() => write()}>Mint Token 2(30 tokens)</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
