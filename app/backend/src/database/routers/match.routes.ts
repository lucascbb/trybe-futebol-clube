import { Router, Request, Response } from 'express';
import MatchController from '../controllers/matchesController';
import MatcheService from '../services/matchesService';
import MatchModel from '../models/MatchesModel';
import middlewareToken from '../validations/tokenMiddleware';

const router = Router();

const matchesService = new MatcheService(MatchModel);
const matchesController = new MatchController(matchesService);

router.get('/', (req: Request, res: Response) => matchesController.getAllMatches(req, res));

router.patch(
  '/:id/finish',
  middlewareToken,
  (req: Request, res: Response) => matchesController.finishMatch(req, res),
);

router.patch(
  '/:id',
  middlewareToken,
  (req: Request, res: Response) => matchesController.editMatch(req, res),
);

router.post(
  '/',
  middlewareToken,
  (req: Request, res: Response) => matchesController.addMatch(req, res),
);

export default router;
