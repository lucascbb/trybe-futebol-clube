import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { newToken } from '../../utils/token.validate';
import UserService from '../services/usersService';
import { validateLogin } from '../validations/loginValidate';

export default class TeamsController {
  constructor(private userService: UserService) {
    this.userService = userService;
  }

  async getLogin(req: Request, res: Response): Promise<object | void> {
    const { email, password } = req.body;

    const validate = validateLogin(email, password);
    if (validate) { return res.status(validate.status).json({ message: validate.message }); }

    const login = await this.userService.getLogin(email);
    if (!login) { return res.status(401).json({ message: 'Invalid email or password' }); }

    const senhaCorreta = bcrypt.compareSync(password, login.password);
    if (!senhaCorreta) { return res.status(401).json({ message: 'Invalid email or password' }); }

    const token = newToken(login.id, login.role);
    return res.status(200).json({ token });
  }
}
