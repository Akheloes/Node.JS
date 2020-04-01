import { Injectable, HttpService } from '@nestjs/common';
import { of, Observable } from 'rxjs';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}
  
  getService(): string {
    return 'Got service !';
  }

  getObservable(): Observable<boolean> {
    return of(true);
  }

  getRequest(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    return this.httpService.get(url);
  }
}
