import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';
import ISort from '../interface/ISort';

export default class UsersController {
  constructor(private leader: LeaderBoardService) { this.leader = leader; }

  async getLeaderBoard(_req: Request, res: Response): Promise<object> {
    const leaderBoard = await this.leader.getLeaderBoard();

    const leaderBoardResult = JSON.parse(JSON.stringify(leaderBoard));

    leaderBoardResult.sort((a: ISort, b: ISort) => {
      if (a.totalPoints < b.totalPoints) { return 1; }
      if (a.totalPoints > b.totalPoints) { return -1; }

      if (a.totalVictories < b.totalVictories) { return 1; }
      if (a.totalVictories > b.totalVictories) { return -1; }

      if (parseInt(a.goalsBalance, 10) < parseInt(b.goalsBalance, 10)) { return 1; }
      if (parseInt(a.goalsBalance, 10) > parseInt(b.goalsBalance, 10)) { return -1; }

      if (a.goalsFavor < b.goalsFavor) { return 1; }
      if (a.goalsFavor > b.goalsFavor) { return -1; }
      return 0;
    });

    return res.status(200).json(leaderBoardResult);
  }
}
