/* eslint-disable max-lines-per-function */
import { ModelStatic, Sequelize } from 'sequelize';
// import IMatches from '../interface/IMatches';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';
import query from '../../utils/queries';

export default class LeaderBoardService {
  constructor(private leaderModel:ModelStatic<Matches>) {}

  async getLeaderBoard(): Promise<any> {
    const resultLeaderBoard = await Promise.all(query.ids.map(async (ele) => {
      const lbH = await this.leaderModel.findAll({
        where: { homeTeamId: ele, inProgress: 0 },
        include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['teamName', 'id'] } }],
        attributes: [[Sequelize.col('homeTeam.team_name'), 'name'],
          [Sequelize.literal(query.string1), 'totalPoints'],
          [Sequelize.fn('COUNT', Sequelize.col('home_team_id')), 'totalGames'],
          [Sequelize.literal(query.string2), 'totalVictories'],
          [Sequelize.literal(query.string4), 'totalDraws'],
          [Sequelize.literal(query.string3), 'totalLosses'],
          [Sequelize.literal(query.string5), 'goalsFavor'],
          [Sequelize.literal(query.string6), 'goalsOwn'],
          [Sequelize.literal(query.string7), 'goalsBalance'],
          [Sequelize.literal(query.string8), 'efficiency']],
        group: ['home_team_id', 'name'],
      }); return lbH as any;
    }));
    const resultArr = resultLeaderBoard.flatMap(([obj]) => obj);
    console.log(resultLeaderBoard); return resultArr;
  }
}
// const leaderBoardService = new LeaderBoardService(Matches);
// leaderBoardService.getLeaderBoard();
// ts-node src/database/services/leaderBoardService.ts
