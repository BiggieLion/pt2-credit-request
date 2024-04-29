import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class PostgresqlConfigService {
  constructor(
    private readonly logger: PinoLogger,
    private readonly configSvc: ConfigService,
  ) {}
}
