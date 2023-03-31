import jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig:object = { expiresIn: '7d', algorithm: 'HS256' };

export const newToken = (id: number, role: string) => jwt.sign({ id, role }, secret, jwtConfig);

export const validateToken = (token: string | any) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) { return false; }
};
