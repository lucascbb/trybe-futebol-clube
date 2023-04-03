import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';

export default class UsersController {
  constructor(private leader: LeaderBoardService) {
    this.leader = leader;
  }

  async getLeaderBoard(req: Request, res: Response): Promise<object | void> {
    const leaderBoard = await this.leader.getLeaderBoard();

    const c = JSON.parse(JSON.stringify(leaderBoard));

    c.sort((a: any, b: any) => {
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

    // console.log(pessoas);

    return res.status(200).json(c);
  }
}
