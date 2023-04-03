const string1 = `SUM(CASE WHEN 
home_team_goals > away_team_goals 
THEN 3 WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)`;

const string2 = 'SUM(CASE WHEN home_team_goals > away_team_goals THEN 1 ELSE 0 END)';

const string3 = 'SUM(CASE WHEN home_team_goals < away_team_goals THEN 1 ELSE 0 END)';

const string4 = 'SUM(CASE WHEN home_team_goals = away_team_goals THEN 1 ELSE 0 END)';

const string5 = 'SUM(CASE WHEN home_team_goals > 0 THEN home_team_goals ELSE 0 END)';

const string6 = 'SUM(CASE WHEN away_team_goals > 0 THEN away_team_goals ELSE 0 END)';

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

const query = { string1, string2, string3, string4, string5, string6, ids };

export default query;
