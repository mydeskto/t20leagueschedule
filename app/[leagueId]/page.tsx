import LeaguePage from "@/components/LeaguePage";
import { leagues } from "@/data/leagues";

export function generateStaticParams() {
  return leagues.map((league) => ({
    leagueId: league.id,
  }));
}

export default function LeagueRoute() {
  return <LeaguePage />;
}
