import { Request, Response, NextFunction } from 'express';
import { validateToken } from '../../utils/token.validate';

function meuMiddleware(req: Request, res: Response, next: NextFunction): any {
  const { authorization } = req.headers;

  if (!authorization) { return res.status(401).json({ message: 'Token not found' }); }
  const validate = validateToken(authorization);
  console.log(validate);
  if (!validate) { return res.status(401).json({ message: 'Token must be a valid token' }); }

  next();
}

export default meuMiddleware;
