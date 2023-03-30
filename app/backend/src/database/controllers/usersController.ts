import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { newToken } from '../../utils/token.validate';
import UserService from '../services/usersService';

export default class TeamsController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  async getLogin(req: Request, res: Response): Promise<object | void> {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    const login = await this.userService.getLogin(email);
    const senhaCorreta = bcrypt.compareSync(password, login.password);

    const token = newToken(login.id, login.role);

    if (senhaCorreta) { return res.status(200).json({ token }); }
  }
}
