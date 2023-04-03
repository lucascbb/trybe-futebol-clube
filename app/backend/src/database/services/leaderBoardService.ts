/* eslint-disable max-len */
import { ModelStatic, Sequelize } from 'sequelize';
import IMatches from '../interface/IMatches';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class LeaderBoardService {
  constructor(private leaderModel:ModelStatic<Matches>) {}

  async getLeaderBoard(): Promise<any> {
    const lbH = await this.leaderModel.findAll({
      where: { homeTeamId: 4, inProgress: 0 },
      include: [{ model: Teams, as: 'homeTeam', required: true, attributes: { exclude: ['teamName', 'id'] } }],
      attributes: [
        [Sequelize.col('homeTeam.team_name'), 'name'],
        [Sequelize.fn('COUNT', Sequelize.col('home_team_id')), 'totalGames'],
        [Sequelize.literal('SUM(CASE WHEN home_team_goals > away_team_goals THEN 3 WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)'), 'pontosTotais'],
        [Sequelize.literal('SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END)'), 'totalVictories'],
        [Sequelize.literal('SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END)'), 'totalLosses'],
        [Sequelize.literal('SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)'), 'totalDraws'],
        [Sequelize.literal('SUM(CASE WHEN home_team_goals > 0 THEN home_team_goals ELSE 0 END)'), 'goalsFavor'],
        [Sequelize.literal('SUM(CASE WHEN away_team_goals > 0 THEN away_team_goals ELSE 0 END)'), 'goalsOwn'],
      ],
      group: ['home_team_id', 'name'],
    });
    return lbH as any;
  }
}

const leaderBoardService = new LeaderBoardService(Matches);
leaderBoardService.getLeaderBoard();

// ts-node src/database/services/leaderBoardService.ts
