import { Request, Response, NextFunction } from 'express';

export default function RequestInfoMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(`Request Path: ${req.originalUrl}`);

  next();
}
