import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RequestService } from '../modules/request/request.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  constructor(
    private readonly configService: ConfigService,
    private requestService: RequestService,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const { params, query, path, method, headers } = context
      .switchToHttp()
      .getRequest();

    return next.handle().pipe(
      tap((data) => {
        if (this.configService.get<boolean>('store.request'))
          this.requestService.create({
            request: { params, query, path, method, headers },
            response: data,
            executionTime: Date.now() - now,
          });
      }),
    );
  }
}
