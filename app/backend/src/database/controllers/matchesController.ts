import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

export default class MatchesController {
  constructor(private matchService: MatchesService) {
    this.matchService = matchService;
  }

  async getAllMatches(req: Request, res: Response): Promise<any> {
    const { inProgress } = req.query;

    const teams = await this.matchService.getAllMatches();
    if (!inProgress) { return res.status(200).json(teams); }

    if (inProgress === 'true') {
      return res.status(200).json(await this.matchService.getProgressMatch(true));
    } return res.status(200).json(await this.matchService.getProgressMatch(false));
  }
}
