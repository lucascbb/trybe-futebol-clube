import { Router, Request, Response } from 'express';
import UserController from '../controllers/usersController';
import UserService from '../services/usersService';
import UserModel from '../models/UserModel';

const router = Router();

const usersService = new UserService(UserModel);
const usersController = new UserController(usersService);

router.post('/', (req: Request, res: Response) => usersController.getLogin(req, res));

export default router;
