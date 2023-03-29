import { ModelStatic } from 'sequelize';
import ITeams from '../interface/ITeams';
import Teams from '../models/TeamsModel';

export default class TeamsService {
  constructor(private teamModel:ModelStatic<Teams>) {}

  async getAllTeams(): Promise<ITeams[]> {
    const teams = await this.teamModel.findAll();
    return teams as ITeams[];
  }

  async getTeam(id: number): Promise<ITeams> {
    const teams = await this.teamModel.findByPk(id);
    return teams as ITeams;
  }
}
