import { Router, Request, Response } from 'express';
import MatchController from '../controllers/matchesController';
import MatcheService from '../services/matchesService';
import MatchModel from '../models/MatchesModel';

const router = Router();

const matchesService = new MatcheService(MatchModel);
const matchesController = new MatchController(matchesService);

router.get('/', (req: Request, res: Response) => matchesController.getAllTeams(req, res));

export default router;
