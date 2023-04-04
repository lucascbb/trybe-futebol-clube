import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoardService';
import sortLeaderBoard from '../../utils/sortLeaderBoard';
import forLoop from '../../utils/forloop';
import ILeaderBoard from '../interface/ILeaderBoard';

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

  async getLeaderBoard(_req: Request, res: Response): Promise<object> {
    const leaderBoardH = JSON.parse(JSON.stringify(await this.leader.getLeaderBoardHome()));
    const leaderBoardA = JSON.parse(JSON.stringify(await this.leader.getLeaderBoardAway()));

    const arrLeaderBoard = leaderBoardA.map((ele:ILeaderBoard) => leaderBoardH.concat(leaderBoardA)
      .filter((ele2:ILeaderBoard) => ele2.name === ele.name));

    const leaderBoardResult = forLoop(leaderBoardH.length, arrLeaderBoard);

    leaderBoardResult.sort(sortLeaderBoard);
    return res.status(200).json(leaderBoardResult);
  }
}
