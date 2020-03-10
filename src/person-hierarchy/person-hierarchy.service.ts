// tslint:disable: no-invalid-await
import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { EntityService } from '../services';
import { PersonHierarchyKey, PersonHierarchy } from '.';

@Injectable()
export class PersonHierarchyService extends EntityService {

  async findByKey(keys: PersonHierarchyKey[]) {
  
const personHierarchy : PersonHierarchy[] = [{Id: '1', ClientName: 'test'}, {Id: '2', ClientName: 'test'}, {Id: '3', ClientName: 'test'}, {Id: '4', ClientName: 'test'}, {Id: '5', ClientName: 'test'}];
    return await personHierarchy;
  }

}
