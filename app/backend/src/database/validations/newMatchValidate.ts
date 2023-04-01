import INewmatch from '../interface/INewmatch';

export const validateMatch = (match: INewmatch) => {
  if (match.homeTeamId === match.awayTeamId) {
    return { status: 422, message: 'It is not possible to create a match with two equal teams' };
  }
  if (match.homeTeamId > 16 || match.awayTeamId > 16) {
    return { status: 404, message: 'There is no team with such id!' };
  }
  if (match.homeTeamId <= 0 || match.awayTeamId <= 0) {
    return { status: 404, message: 'There is no team with such id!' };
  }
};
const validate = { validateMatch };

export default validate;
