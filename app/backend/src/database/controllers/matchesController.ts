import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import IMatches from '../interface/IMatches';
import { validateMatch } from '../validations/newMatchValidate';

export default class MatchesController {
  constructor(private matchService: MatchesService) {
    this.matchService = matchService;
  }

  async getAllMatches(req: Request, res: Response): Promise<IMatches[] | object> {
    const { inProgress } = req.query;

    const matches = await this.matchService.getAllMatches();
    if (!inProgress) { return res.status(200).json(matches); }

    if (inProgress === 'true') {
      return res.status(200).json(await this.matchService.getProgressMatch(true));
    } return res.status(200).json(await this.matchService.getProgressMatch(false));
  }

  async finishMatch(req: Request, res: Response): Promise<object> {
    const { id } = req.params;

    await this.matchService.finishMatch(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  async editMatch(req: Request, res: Response): Promise<object> {
    const updateGoals = req.body;
    const { id } = req.params;

    await this.matchService.editMatch(Number(id), updateGoals);
    return res.status(200).json({ message: 'Edited' });
  }

  async addMatch(req: Request, res: Response): Promise<object> {
    const newMatch = req.body;

    const validate = validateMatch(newMatch);
    if (validate) { return res.status(validate.status).json({ message: validate.message }); }

    const match = await this.matchService.addMatch(newMatch);
    return res.status(201).json(match);
  }
}
