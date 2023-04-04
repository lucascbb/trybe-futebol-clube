import ISort from '../database/interface/ISort';

const sortLeaderBoard = (a: ISort, b: ISort) => {
  if (a.totalPoints < b.totalPoints) { return 1; }
  if (a.totalPoints > b.totalPoints) { return -1; }

  if (a.totalVictories < b.totalVictories) { return 1; }
  if (a.totalVictories > b.totalVictories) { return -1; }

  if (parseInt(a.goalsBalance, 10) < parseInt(b.goalsBalance, 10)) { return 1; }
  if (parseInt(a.goalsBalance, 10) > parseInt(b.goalsBalance, 10)) { return -1; }

  if (a.goalsFavor < b.goalsFavor) { return 1; }
  if (a.goalsFavor > b.goalsFavor) { return -1; }
  return 0;
};

export default sortLeaderBoard;
