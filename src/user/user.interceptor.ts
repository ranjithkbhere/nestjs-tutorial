import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log('request', request);
    return next.handle().pipe(
      map((data) => {
        const modifiedData = data.map((item) => {
          return { ...item, name: item.name.toUpperCase() };
        });
        return modifiedData;
      }),
    );
  }
}
