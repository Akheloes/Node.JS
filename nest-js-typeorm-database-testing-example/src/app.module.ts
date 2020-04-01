import { Module, HttpModule } from '@nestjs/common';
import { AppService } from './app.service';
import { GenericEntityModule } from './genericEntity.module';

@Module({
  imports: [
    HttpModule,
    GenericEntityModule
  ],
  providers: [AppService],
})
export class AppModule {}
