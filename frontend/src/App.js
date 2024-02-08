import React from 'react';
import { NFTMint } from "./NFTMint";
import { Token1Mint } from "./Token1Mint";
import { Token2Mint } from "./Token2Mint";
import { useAccount } from "wagmi";

function App() {
  const { isConnected } = useAccount(); 

  return (
    <div className="App">
      <w3m-button/>
      {isConnected ? (
        <>
          <Token1Mint />
          <Token2Mint />
          <NFTMint />
        </>
      ) : (
        <div>Please connect your wallet.</div>
      )}
    </div>
  );
}

export default App;
