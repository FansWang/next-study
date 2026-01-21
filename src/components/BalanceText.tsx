"use client";

interface BalanceTextProps {
  amount: string;
}

export function BalanceText({ amount }: BalanceTextProps) {
  return (
    <div className="text-4xl font-extrabold mb-6">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 ">
        {amount} ETH
      </span>
    </div>
  )
}