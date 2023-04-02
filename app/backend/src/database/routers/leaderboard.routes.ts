import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';
import TeamsModel from '../models/TeamsModel';

const router = Router();

const teamsService = new TeamsService(TeamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/home', (req: Request, res: Response) => teamsController.getAllTeams(req, res));

export default router;
