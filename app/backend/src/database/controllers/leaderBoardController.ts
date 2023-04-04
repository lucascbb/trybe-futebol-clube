/* eslint-disable max-lines-per-function */
import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';
import sortLeaderBoard from '../../utils/sortLeaderBoard';

export default class UsersController {
  constructor(private leader: LeaderBoardService) { this.leader = leader; }

  async getLeaderBoardHome(_req: Request, res: Response): Promise<object> {
    const leaderBoard = await this.leader.getLeaderBoardHome();

    const leaderBoardResultHome = JSON.parse(JSON.stringify(leaderBoard));

    leaderBoardResultHome.sort(sortLeaderBoard);

    return res.status(200).json(leaderBoardResultHome);
  }

  async getLeaderBoardAway(_req: Request, res: Response): Promise<object> {
    const leaderBoard = await this.leader.getLeaderBoardAway();

    const leaderBoardResultAway = JSON.parse(JSON.stringify(leaderBoard));

    leaderBoardResultAway.sort(sortLeaderBoard);

    return res.status(200).json(leaderBoardResultAway);
  }

  async getLeaderBoard(req: Request, res: Response): Promise<object> {
    const leaderBoardH = JSON.parse(JSON.stringify(await this.leader.getLeaderBoardHome()));
    const leaderBoardA = JSON.parse(JSON.stringify(await this.leader.getLeaderBoardAway()));

    const result = leaderBoardH.concat(leaderBoardA);

    const a = leaderBoardA.map((ele:any) => result.filter((ele2:any) => ele2.name === ele.name));

    const resu = [];
    for (let i = 0; i < leaderBoardH.length; i += 1) {
      const ob = {
        name: a[i][0].name,
        totalPoints: a[i][0].totalPoints + a[i][1].totalPoints,
        totalGames: a[i][0].totalGames + a[i][1].totalGames,
        totalVictories: a[i][0].totalVictories + a[i][1].totalVictories,
        totalDraws: a[i][0].totalDraws + a[i][1].totalDraws,
        totalLosses: a[i][0].totalLosses + a[i][1].totalLosses,
        goalsFavor: a[i][0].goalsFavor + a[i][1].goalsFavor,
        goalsOwn: a[i][0].goalsOwn + a[i][1].goalsOwn,
        goalsBalance: parseInt(a[i][0].goalsBalance, 10) + parseInt(a[i][1].goalsBalance, 10),
        efficiency: (((a[i][0].totalPoints + a[i][1].totalPoints)
        / ((a[i][0].totalGames + a[i][1].totalGames) * 3)) * 100).toFixed(2),
      }; resu.push(ob); console.log(resu);
    }

    return res.status(200).json(resu);
  }
}
