export default interface IMatches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress: false,
  homeTeam: {
    teamName: string
  },
  awayTeam: {
    teamName: string
  }
}
