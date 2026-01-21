
"use client";

import {connectStatus} from "@/types/wallet";

interface ConnectButtonProps {
  status: connectStatus;
  handleConnect: () => void;
}

export const ConnectButton = ({status, handleConnect}: ConnectButtonProps) => {


  return (
    <button
      onClick={handleConnect}
      className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
        status === connectStatus.disconnected
        ? "bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white shadow-blue-500/20 cursor-pointer"
        : "bg-gray-700 text-gray-400 cursor-pointer"
      }`}
    >
      {status === connectStatus.disconnected && "Connect Wallet"}
      {status === connectStatus.connecting && "Connecting..."}
      {status === connectStatus.connected && "Wallet Connected"}
    </button>
  )
}