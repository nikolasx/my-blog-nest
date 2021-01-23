import { HttpService, Injectable, NestMiddleware } from '@nestjs/common';
import * as ejs from 'ejs';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RedirectMiddleware implements NestMiddleware {
  public constructor(private readonly httpService: HttpService) {}

  public async use(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void> {
    const baseUrl = req.baseUrl;
    const reg = /(\.js|css|png)|^\/api/;
    if (reg.test(baseUrl)) {
      console.log('baseUrl', baseUrl);
      next();
    } else {
      res.setHeader('Content-Type', 'text/html');
      const template = await this.httpService
        .get('http://localhost:9000/index.ejs')
        .toPromise();
      const html = ejs.render(template.data);
      res.send(html);
    }
  }
}
