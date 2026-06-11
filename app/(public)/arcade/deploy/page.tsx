import { SqyshDeploy } from "@/app/components/arcade/SqyshDeploy";
import { SlimNav } from "@/app/components/SlimNav";

export default function DeployGamePage() {
  return (
    <main className="relative min-h-dvh flex flex-col bg-sqysh-bg text-sqysh-text overflow-hidden">
      <SlimNav />
      <div className="relative flex-1 flex flex-col min-h-0 overflow-hidden">
        <SqyshDeploy />
      </div>
    </main>
  );
}
