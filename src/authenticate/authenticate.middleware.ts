import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const path = req.originalUrl;
    const param = req.params;
    const method = req.method;
    const timestamp = new Date().toISOString();
    console.log(timestamp);
    console.log(method);
    console.log(param);
    console.log(path);
    next();
  }
}
