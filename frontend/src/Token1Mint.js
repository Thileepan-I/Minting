// Token1Mint.js
import { useContractWrite, useAccount } from 'wagmi';
import abi  from './abis/contracts/Token1.sol/Token1.json';

export function Token1Mint() {
  const { address } = useAccount();
  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: '0x53c1d0e57A2E13838ff369bBFbCF83e22e0abcf8',
    account: '0x316adBe2505856d4c4D67573dC6b6648453faEa9',
    abi: abi.abi,
    functionName: 'mint',
    args: [address, 3*1e18],
  });

  return (
    <div>
      <button onClick={() => write()}>Mint Token 1(3tokens)</button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  );
}
