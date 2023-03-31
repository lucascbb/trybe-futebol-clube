import { Request, Response } from 'express';
import { validateToken } from '../../utils/token.validate';
import UserService from '../services/usersService';

export default class AuthController {
  constructor(private userService: UserService) {}

  async authLogin(req: Request, res: Response): Promise<object | void> {
    const { authorization } = req.headers;

    console.log(this);
    const role = validateToken(authorization);
    return res.status(200).json({ role: JSON.parse(JSON.stringify(role)).role });
  }
}
