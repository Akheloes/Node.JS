import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/common';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        imports: [HttpModule],
        providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('root', () => {
    it('should return "Got service !"', () => {
      expect(appService.getService()).toBe('Got service !');
    });

    it('should return the Observable', () => {
        appService.getObservable().subscribe(observed => {
            expect(observed).toBeTruthy();
        });
    });

    it('should return the http response', () => {
        appService.getRequest().subscribe(response => {
            expect(response).toBeTruthy();
        });
    });

  });
});
