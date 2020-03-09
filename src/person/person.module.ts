import { Module } from '@nestjs/common';
import { PersonResolver } from './person.resolver';
import { EntityService } from '../services';

@Module({
  providers: [PersonResolver, EntityService],
})
export class PersonModule {}