import connection from './connection';

const getTeams = async () => {
  const sql = 'SELECT id, team_name as teamName FROM TRYBE_FUTEBOL_CLUBE.teams';

  const [rows] = await connection.execute(sql);
  return rows;
};

const teamModel = { getTeams };
export default teamModel;

// getTeams().then((ele) => console.log(ele));
// ts-node src/models/teamsModel.ts
