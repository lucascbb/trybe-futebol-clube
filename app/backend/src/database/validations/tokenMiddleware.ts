import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../../utils/token.validate';

function meuMiddleware(req: Request, res: Response, next: NextFunction): any {
  const { authorization } = req.headers;
  // console.log(authorization);

  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
  const a = validateToken(authorization);
  if (a) { return res.status(401).json({ message: a }); }

  next();
}

export default meuMiddleware;
