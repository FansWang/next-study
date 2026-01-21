
"use client";

import React, { ReactNode } from "react";

interface WalletCardProps {
  children: ReactNode;
}

export const WalletCard: React.FC<WalletCardProps> = ({children}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gray-900 rounded-2xl border border-gray-800 shadow w-80">
      {children}
    </div>
  )
}

