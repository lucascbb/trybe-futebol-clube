import { ModelStatic, Op } from 'sequelize';
import IMatches from '../interface/IMatches';
import Matches from '../models/MatchesModel';
import Teams from '../models/TeamsModel';

export default class LeaderBoardService {
  constructor(private leaderModel:ModelStatic<Matches>) {}

  async getLeaderBoard(): Promise<IMatches[]> {
    const array = [1, 2, 3, 4, 5];
    array.forEach((ele, i) => {
      console.log(ele, i);
    });

    const leaderBoardH = await this.leaderModel.findAll({
      where: { homeTeamId: 1 },
      include: [{ model: Teams,
        as: 'homeTeam',
        required: true,
        attributes: ['teamName'] }],
    });

    const obj = { name: leaderBoardH[0].homeTeam.teamName };

    console.log(obj);
    return leaderBoardH as IMatches[];
  }
}

const leaderBoardService = new LeaderBoardService(Matches);
leaderBoardService.getLeaderBoard();

// getLeaderBoard().then((ele) => console.log(ele));
// codigo: ts-node src/models/login.model.ts

// {
//   "name": "Corinthians",
//   "totalPoints": 12,
//   "totalGames": 5,
//   "totalVictories": 4,
//   "totalDraws": 0,
//   "totalLosses": 1,
//   "goalsFavor": 12,
//   "goalsOwn": 3,
//   "goalsBalance": 9,
//   "efficiency": 80
// }
