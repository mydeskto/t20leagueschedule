// Team slug mappings for schema.org URLs
export const teamUrls: Record<string, string> = {
  "Biratnagar Kings": "biratnagar-kings",
  "Janakpur Bolts": "janakpur-bolts",
  "Kathmandu Gurkhas": "kathmandu-gurkhas",
  "Chitwan Rhinos": "chitwan-rhinos",
  "Sudurpaschim Royals": "sudurpaschim-royals",
  "Pokhara Avengers": "pokhara-avengers",
  "Karnali Yaks": "karnali-yaks",
  "Lumbini Lions": "lumbini-lions"
};

export function getTeamUrl(teamName: string): string {
  const slug = teamUrls[teamName];
  return slug ? `https://CPLt20league.com/teams/${slug}` : `https://CPLt20league.com/teams`;
}


