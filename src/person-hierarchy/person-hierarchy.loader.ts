import { Injectable, Logger, Scope } from '@nestjs/common';
import DataLoader from 'dataloader';
import { NestDataLoader } from 'nestjs-dataloader';
import { PersonHierarchyKey} from './person-hierarchy.key';
import { PersonHierarchy } from './person-hierarchy';
import { PersonHierarchyService } from './person-hierarchy.service';

@Injectable()
export class PersonHierarchyLoader implements NestDataLoader<PersonHierarchyKey, PersonHierarchy[] | null> {
  private readonly logger = new Logger(PersonHierarchyLoader.name);

  constructor(private readonly service: PersonHierarchyService) {
    console.log('loader here');
  }

  generateDataLoader() {
    console.log('generate data loader');
    return new DataLoader<PersonHierarchyKey, PersonHierarchy[] | null>(async (keys: PersonHierarchyKey[]) => {
      try {
        const result = await this.service.findByKey(keys);
        return keys.map(key => result.filter(p => p.Id === key.Id) || null);
      } catch (error) {
        this.logger.error(error);
        throw error;
      }
    });
  }
}
