import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    const baseUrl = req.baseUrl;
    const reg = /(\.js|css|png)|^\/api/;
    if (reg.test(baseUrl)) {
      console.log('baseUrl', baseUrl);
      next();
    } else {
      res.setHeader('Content-Type', 'text/html');
      res.render('index', {
        html: 'http://localhost:9000/index.html',
      });
    }
  }
}
