import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import { customError } from '../types';

export const errorMiddleware = (err: customError, req: Request, res: Response, _next: NextFunction)
: Response | void => {
  if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: 'Invalid token or Expired Token',
    });
  }

  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  console.log(err);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
};
