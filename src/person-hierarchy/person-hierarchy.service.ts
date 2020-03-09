// tslint:disable: no-invalid-await
import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { EntityService } from '../services';
import { PersonHierarchyKey, PersonHierarchy } from '.';

@Injectable()
export class PersonHierarchyService extends EntityService {

  async findByKey(keys: PersonHierarchyKey[]) {
  
const personHierarchy : PersonHierarchy[] = [];
    return await personHierarchy;
  }

}
