import { getLeaderboard } from "@/app/lib/actions/game-score/getLeaderBoard";
import SqyshDebug from "../../../components/arcade/SqyshDebug";

export default async function DebugGamePage() {
  const res = await getLeaderboard();
  return <SqyshDebug leaderboard={res.success ? res.data : []} />;
}
