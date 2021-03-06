// tslint:disable: no-invalid-await
import { Inject, Injectable, Logger, Scope } from '@nestjs/common';
import { CONTEXT } from '@nestjs/graphql';

//@Injectable()
@Injectable({ scope: Scope.REQUEST })
export class EntityService {
  private readonly logger = new Logger(EntityService.name);
  @Inject(CONTEXT)
  private readonly context?: any;

  private getUsername() {
    return this.context?.req?.user?.username || 'Administrator';
  }

  async get<TEntity>(tableName: string, key: Partial<TEntity>) {
    return await [{Id: '1'}, {Id: '2'}, {Id: '3'}, {Id: '4'}, {Id: '5'}];
  }
}
