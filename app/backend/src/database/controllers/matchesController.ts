import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import IMatches from '../interface/IMatches';

export default class MatchesController {
  constructor(private matchService: MatchesService) {
    this.matchService = matchService;
  }

  async getAllMatches(req: Request, res: Response): Promise<IMatches[]> {
    const { inProgress } = req.query;

    const matches = await this.matchService.getAllMatches();
    if (!inProgress) { return res.status(200).json(matches); }

    if (inProgress === 'true') {
      return res.status(200).json(await this.matchService.getProgressMatch(true));
    } return res.status(200).json(await this.matchService.getProgressMatch(false));
  }
}
