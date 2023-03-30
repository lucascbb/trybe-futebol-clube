import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
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

    const passwordHash = await hash(password, 8);

    await this.userService.getLogin(email, password);

    res.status(200).json(passwordHash);
  }
}
