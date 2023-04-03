const string1 = `CAST(SUM(CASE WHEN 
home_team_goals > away_team_goals 
THEN 3 WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) AS UNSIGNED)`;

const string2 = `CAST(SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END) 
AS UNSIGNED)`;

const string3 = `CAST(SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END)
 AS UNSIGNED)`;

const string4 = `CAST(SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)
 AS UNSIGNED)`;

const string5 = `CAST(SUM(CASE WHEN home_team_goals > 0 THEN home_team_goals ELSE 0 END)
 AS UNSIGNED)`;

const string6 = `CAST(SUM(CASE WHEN away_team_goals > 0 THEN away_team_goals ELSE 0 END)
AS UNSIGNED)`;

const string7 = 'SUM(home_team_goals - away_team_goals)';

const string8 = `ROUND((SUM(CASE WHEN home_team_goals > away_team_goals
  THEN 3 WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END) / 
  (COUNT(home_team_id)*3)) * 100, 2)`;

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const query = { string1, string2, string3, string4, string5, string6, string7, string8, ids };

export default query;
