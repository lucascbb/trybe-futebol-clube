import { ModelStatic } from 'sequelize';
import IMatches from '../interface/IMatches';
import Matches from '../models/MatchesModel';

export default class MatchesService {
  constructor(private matchesModel:ModelStatic<Matches>) {}

  async getAllMatches(): Promise<IMatches[]> {
    const matches = await this.matchesModel.findAll();
    return matches as IMatches[];
  }
}
