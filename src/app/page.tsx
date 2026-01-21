import BalanceDisplay from "@/components/BalanceDisplay";
import {Greet} from "@/components/greet";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black flex-col gap-4">
      <Greet />
      <BalanceDisplay />
    </main>
  );
}
