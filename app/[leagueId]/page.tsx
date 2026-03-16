import LeaguePage from "@/components/LeaguePage";
import { getLeagueById, leagues } from "@/data/leagues";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ leagueId: string }>;
}): Promise<Metadata> {
  const { leagueId } = await params;
  const league = getLeagueById(leagueId);

  if (!league) return { title: "League Not Found" };

  const title = league.seoTitle ?? `${league.shortName} 2026 Schedule – ${league.name}`;
  const description =
    league.seoDescription ?? `View ${league.name} schedule, points table, teams and venues.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export function generateStaticParams() {
  return leagues.map((league) => ({
    leagueId: league.id,
  }));
}

export default function LeagueRoute() {
  return <LeaguePage />;
}
