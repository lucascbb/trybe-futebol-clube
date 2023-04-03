import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';
import ISort from '../interface/ISort';

export default class UsersController {
  constructor(private leader: LeaderBoardService) {
    this.leader = leader;
  }

  async getLeaderBoard(req: Request, res: Response): Promise<object | void> {
    const leaderBoard = await this.leader.getLeaderBoard();

    const c = JSON.parse(JSON.stringify(leaderBoard));

    c.sort((a: ISort, b: ISort) => {
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

    console.log(typeof c[0]);

    return res.status(200).json(c);
  }
}
