import { createFileRoute } from "@tanstack/react-router";
import { KaleidoStage } from "@/components/kaleido-stage";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <KaleidoStage />;
}
