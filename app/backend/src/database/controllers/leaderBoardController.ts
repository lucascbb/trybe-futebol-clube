import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';

export default class UsersController {
  constructor(private leader: LeaderBoardService) {
    this.leader = leader;
  }

  async getLeaderBoard(req: Request, res: Response): Promise<object | void> {
    const leaderBoard = await this.leader.getLeaderBoard();

    return res.status(200).json(leaderBoard);
  }
}
