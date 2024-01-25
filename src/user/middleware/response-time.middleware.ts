import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ResponseTimeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();

    res.on('finish', () => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      console.log(
        `[${new Date().toISOString()}] Response Time: ${responseTime}ms`,
      );
    });

    next();
  }
}
