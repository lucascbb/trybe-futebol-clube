import { Router, Request, Response } from 'express';
import LeaderBoardController from '../controllers/leaderBoardController';
import LeaderBoardService from '../services/leaderBoardService';
import LeaderBoardModel from '../models/MatchesModel';

const router = Router();

const leaderBoardService = new LeaderBoardService(LeaderBoardModel);
const boardController = new LeaderBoardController(leaderBoardService);

router.get('/home', (req: Request, res: Response) => boardController.getLeaderBoardHome(req, res));

router.get('/away', (req: Request, res: Response) => boardController.getLeaderBoardAway(req, res));

router.get('/', (req: Request, res: Response) => boardController.getLeaderBoard(req, res));

export default router;
