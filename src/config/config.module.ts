import { Global, Module } from '@nestjs/common';
import { ApiConfigModule } from './api/config.module';

@Global()
@Module({
  imports: [ApiConfigModule],
})
export class ConfigModule {}
