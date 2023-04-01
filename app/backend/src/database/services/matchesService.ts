import { ModelStatic } from 'sequelize';
import IMatches from '../interface/IMatches';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class MatchesService {
  constructor(private matchesModel:ModelStatic<Matches>) {}

  async getAllMatches(): Promise<IMatches[]> {
    const matches = await this.matchesModel.findAll({
      include: [{ model: Teams, as: 'homeTeam', required: true, attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', required: true, attributes: ['teamName'] }],
    });
    return matches as IMatches[];
  }

  async getProgressMatch(progress: boolean): Promise<IMatches[]> {
    const matches = await this.matchesModel.findAll({
      where: { inProgress: progress },
      include: [{ model: Teams, as: 'homeTeam', required: true, attributes: ['teamName'] },
        { model: Teams, as: 'awayTeam', required: true, attributes: ['teamName'] }],
    });
    return matches as IMatches[];
  }

  async finishMatch(id: number) {
    await this.matchesModel.update(
      { inProgress: false },
      { where: { id } },
    );
  }

  async editMatch(id: number, team: any) {
    await this.matchesModel.update(
      { homeTeamGoals: team.homeTeamGoals, awayTeamGoals: team.awayTeamGoals },
      { where: { id } },
    );
  }
}
