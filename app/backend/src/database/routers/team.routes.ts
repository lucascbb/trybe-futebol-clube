import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';
import TeamsModel from '../models/TeamsModel';

const router = Router();

const teamsService = new TeamsService(TeamsModel);
const teamsController = new TeamsController(teamsService);

router.get('/', (req: Request, res: Response) => teamsController.getAllTeams(req, res));

router.get('/:id', (req: Request, res: Response) => teamsController.getTeam(req, res));

router.get('/role', (req: Request, res: Response) => teamsController.getTeam(req, res));

export default router;
