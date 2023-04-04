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
}
