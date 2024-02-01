import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class UserFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    // const status = exception.getStatus();
    const request = ctx.getRequest();

    response.status(500).json({
      timestamp: new Date().toISOString(),
      statusCode: 500,
      path: request.url,
    });
  }
}
