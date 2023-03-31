import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../../utils/token.validate';

function tokeMiddleware(req: Request, res: Response, next: NextFunction): object | void {
  const { authorization } = req.headers;

  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }

  const validate = validateToken(authorization);
  if (!validate) { return res.status(401).json({ message: 'Token must be a valid token' }); }

  next();
}

export default tokeMiddleware;
