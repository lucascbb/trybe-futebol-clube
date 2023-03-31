import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

export default class MatchesController {
  constructor(private matchService: MatchesService) {
    this.matchService = matchService;
  }

  async getAllTeams(req: Request, res: Response): Promise<void> {
    const teams = await this.matchService.getAllMatches();
    res.status(200).json(teams);
  }
}
