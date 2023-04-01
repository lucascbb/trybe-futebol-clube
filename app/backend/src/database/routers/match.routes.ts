import { Router, Request, Response } from 'express';
import MatchController from '../controllers/matchesController';
import MatcheService from '../services/matchesService';
import MatchModel from '../models/MatchesModel';
import tokenMiddleware from '../validations/tokenMiddleware';

const router = Router();

const matchesService = new MatcheService(MatchModel);
const matchesController = new MatchController(matchesService);

router.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));

router.post(
  '/:id',
  tokenMiddleware,
  (req: Request, res: Response) => matchesController.editMatch(req, res),
);

router.get(
  '/:id/finish',
  tokenMiddleware,
  (req: Request, res: Response) => matchesController.finishMatch(req, res),
);

export default router;
