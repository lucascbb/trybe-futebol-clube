import { Request, Response } from 'express';
import TeamsService from '../services/teamsService';

export default class TeamsController {
  constructor(private teamService: TeamsService) {
    this.teamService = teamService;
  }

  async getAllTeams(req: Request, res: Response): Promise<void> {
    const teams = await this.teamService.getAllTeams();
    res.status(200).json(teams);
  }

  async getTeam(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const team = await this.teamService.getTeam(Number(id));
    res.status(200).json(team);
  }
}
