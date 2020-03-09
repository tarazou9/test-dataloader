import { Module } from '@nestjs/common';
import { EntityService } from '../services';
import { PersonHierarchyService} from './person-hierarchy.service';
import {PersonHierarchyLoader} from './person-hierarchy.loader';

@Module({
  providers: [EntityService, PersonHierarchyService, PersonHierarchyLoader],
})
export class PersonHierarchyModule {}
