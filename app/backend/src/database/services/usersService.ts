import { ModelStatic } from 'sequelize';
import ILogin from '../interface/ILogin';
import Users from '../models/UserModel';

export default class UsersService {
  constructor(private userModel:ModelStatic<Users>) {}

  async getLogin(email: string): Promise<ILogin> {
    const login = await this.userModel.findOne({
      // attributes: ['id', 'username', 'role', 'email'],
      where: { email },
    });

    return login as ILogin;
  }
}
