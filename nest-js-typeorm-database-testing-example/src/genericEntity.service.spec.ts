import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/common';
import { GenericEntityService } from './genericEntity.service';
import { genericEntityProviders } from './genericEntity.providers';
import { DatabaseModule } from './database.module';

describe('GenericEntityService', () => {
  let genericEntityService: GenericEntityService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
        imports:[DatabaseModule],
        providers: [
            ...genericEntityProviders,
            GenericEntityService
        ],
    }).compile();

    genericEntityService = app.get<GenericEntityService>(GenericEntityService);
  });

  describe('GenericEntityService', () => {
    it('should create service', () => {
      expect(genericEntityService).toBeTruthy();
    });
  });
});
