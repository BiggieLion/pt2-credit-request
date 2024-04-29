import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SsmConfigService {
  constructor(private readonly configSvc: ConfigService) {}

  public get ACCESS_KEY_ID(): string {
    return this.configSvc.get<string>('ssm.accessKeyId');
  }

  public get SECRET_ACCESS_KEY(): string {
    return this.configSvc.get<string>('ssm.secretAccessKey');
  }

  public get SSM_ENDPOINT(): string {
    return this.configSvc.get<string>('ssm.ssmEndpoint');
  }

  public get SESSION_TOKEN(): string {
    return this.configSvc.get<string>('ssm.sessionToken');
  }

  public get REGION(): string {
    return this.configSvc.get<string>('ssm.region');
  }
}
