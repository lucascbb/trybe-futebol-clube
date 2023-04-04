const loopFunction = (length: number, arr: any) => {
  const resultLeadeBoard = [];
  for (let i = 0; i < length; i += 1) {
    const leaderBoard = {
      name: arr[i][0].name,
      totalPoints: arr[i][0].totalPoints + arr[i][1].totalPoints,
      totalGames: arr[i][0].totalGames + arr[i][1].totalGames,
      totalVictories: arr[i][0].totalVictories + arr[i][1].totalVictories,
      totalDraws: arr[i][0].totalDraws + arr[i][1].totalDraws,
      totalLosses: arr[i][0].totalLosses + arr[i][1].totalLosses,
      goalsFavor: arr[i][0].goalsFavor + arr[i][1].goalsFavor,
      goalsOwn: arr[i][0].goalsOwn + arr[i][1].goalsOwn,
      goalsBalance: (parseInt(arr[i][0].goalsBalance, 10)
      + parseInt(arr[i][1].goalsBalance, 10)).toString(),
      efficiency: (((arr[i][0].totalPoints + arr[i][1].totalPoints)
      / ((arr[i][0].totalGames + arr[i][1].totalGames) * 3)) * 100).toFixed(2),
    }; resultLeadeBoard.push(leaderBoard);
  } return resultLeadeBoard;
};

export default loopFunction;
