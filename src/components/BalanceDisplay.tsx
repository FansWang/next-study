
"use client";

import {useState} from "react";
import {BalanceText} from "@/components/BalanceText";
import {connectStatus} from "@/types/wallet";
import {ConnectButton} from "@/components/ConnectButton";
import {WalletCard} from "@/components/WalletCard";



export default function BalanceDisplay() {
  const [balance, setBalance] = useState<string>("0.00");
  const [status, setStatus] = useState<connectStatus>(connectStatus.disconnected);
  const [currentNetwork, setCurrentNetwork] = useState<string>("Ethereum");

  const networks = ["Ethereum", "Polygon", "Arbitrum"];


  const handleConnect = () => {
    if (status === connectStatus.connecting) return;

    if (status === connectStatus.disconnected) {
      setStatus(connectStatus.connecting);
      setTimeout(() => {
        setBalance("1.527");
        setStatus(connectStatus.connected);
      }, 2000)
    } else {
      setStatus(connectStatus.disconnected);
      setBalance("0.00");
    }

  }

  return (
    <WalletCard>

      <h3 className="text-gray-400 text-xs mb-2 font-medium uppercase tracking-widest">
        {status === connectStatus.disconnected ? "Wallet Balance" : "Balance Status"}
      </h3>

      <BalanceText amount={balance} />
      <ConnectButton status={status} handleConnect={handleConnect} />

      <p className="mt-4 text-[10px] text-gray-600 uppercase">
        Network: Ethereum Mainnet
      </p>
      <div className="flex gap-2 mt-4">
        {networks.map((network) => (
          <span key={network}
                onClick={() => setCurrentNetwork(network)}
                className={`px-2 py-1 text-[8px] rounded cursor-pointer  ${
                  network === currentNetwork
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}>
            {network}
          </span>
        ))}
      </div>
    </WalletCard>
  )
}

