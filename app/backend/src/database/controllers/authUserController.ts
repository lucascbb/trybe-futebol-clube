import { Request, Response } from 'express';
import { validateToken } from '../../utils/token.validate';
import UserService from '../services/usersService';

export default class AuthController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  async authLogin(req: Request, res: Response): Promise<object | void> {
    const { authorization } = req.headers;
    const role = validateToken(authorization);

    const login = await this.userService.getLogin('email');
    if (login) { res.status(401).json({ message: 'Invalid email or password' }); }

    return res.status(200).json({ role: JSON.parse(JSON.stringify(role)).role });
  }
}
