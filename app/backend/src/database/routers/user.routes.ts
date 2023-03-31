import { Router, Request, Response } from 'express';
import UserController from '../controllers/usersController';
import AuthController from '../controllers/authUserController';
import UserService from '../services/usersService';
import UserModel from '../models/UserModel';
import middlewareToken from '../validations/tokenMiddleware';

const router = Router();

const usersService = new UserService(UserModel);
const usersController = new UserController(usersService);

router.post('/', (req: Request, res: Response) => usersController.getLogin(req, res));

const authService = new UserService(UserModel);
const authsController = new AuthController(authService);

router.get(
  '/role',
  middlewareToken,
  (req: Request, res: Response) => authsController.authLogin(req, res),
);

export default router;
