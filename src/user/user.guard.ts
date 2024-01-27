import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest();
    if (request.headers.authorization) {
      const token = request.headers.authorization.split(' ')[1];
      if (token !== 'shameel-token') {
        return false;
      }
    }
    return true;
  }
}
