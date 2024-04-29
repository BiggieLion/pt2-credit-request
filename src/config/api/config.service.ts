import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private readonly configSvc: ConfigService) {}

  public get ENV(): string {
    return this.configSvc.get<string>('api.env');
  }

  public get NODE_ENV(): string {
    return this.configSvc.get<string>('api.node_env');
  }

  public get STAGE(): string {
    return this.configSvc.get<string>('api.stage');
  }

  public get LOG_LEVEL(): string {
    return this.configSvc.get<string>('api.level');
  }

  public get CUSTOM_DOMAIN(): string {
    return this.configSvc.get<string>('api.custom_domain');
  }
}
