import { ModelStatic, Sequelize } from 'sequelize';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';
import queryH from '../../utils/queriesHome';
import queryA from '../../utils/queriesAway';

export default class LeaderBoardService {
  constructor(private leaderModel:ModelStatic<Matches>) {}

  async getLeaderBoardHome(): Promise<object> {
    const resultLeaderBoard = await Promise.all(queryH.ids.map(async (ele) => {
      const lbH = await this.leaderModel.findAll({
        where: { homeTeamId: ele, inProgress: 0 },
        include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['teamName', 'id'] } }],
        attributes: [[Sequelize.col('homeTeam.team_name'), 'name'],
          [Sequelize.literal(queryH.string1), 'totalPoints'],
          [Sequelize.fn('COUNT', Sequelize.col('home_team_id')), 'totalGames'],
          [Sequelize.literal(queryH.string2), 'totalVictories'],
          [Sequelize.literal(queryH.string4), 'totalDraws'],
          [Sequelize.literal(queryH.string3), 'totalLosses'],
          [Sequelize.literal(queryH.string5), 'goalsFavor'],
          [Sequelize.literal(queryH.string6), 'goalsOwn'],
          [Sequelize.literal(queryH.string7), 'goalsBalance'],
          [Sequelize.literal(queryH.string8), 'efficiency']],
        group: ['home_team_id', 'name'] }); return lbH;
    }));
    const resultArr = resultLeaderBoard.flatMap(([obj]) => obj);
    return resultArr as object;
  }

  async getLeaderBoardAway(): Promise<object> {
    const resultLeaderBoard = await Promise.all(queryA.ids.map(async (ele) => {
      const lbH = await this.leaderModel.findAll({
        where: { awayTeamId: ele, inProgress: false },
        include: [{ model: Teams, as: 'awayTeam', attributes: { exclude: ['teamName', 'id'] } }],
        attributes: [[Sequelize.col('awayTeam.team_name'), 'name'],
          [Sequelize.literal(queryA.string1), 'totalPoints'],
          [Sequelize.fn('COUNT', Sequelize.col('away_team_id')), 'totalGames'],
          [Sequelize.literal(queryA.string2), 'totalVictories'],
          [Sequelize.literal(queryA.string4), 'totalDraws'],
          [Sequelize.literal(queryA.string3), 'totalLosses'],
          [Sequelize.literal(queryA.string5), 'goalsFavor'],
          [Sequelize.literal(queryA.string6), 'goalsOwn'],
          [Sequelize.literal(queryA.string7), 'goalsBalance'],
          [Sequelize.literal(queryA.string8), 'efficiency']],
        group: ['away_team_id', 'name'] }); return lbH;
    }));
    const resultArr = resultLeaderBoard.flatMap(([obj]) => obj);
    return resultArr as object;
  }
}
