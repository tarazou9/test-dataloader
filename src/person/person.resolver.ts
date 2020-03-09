import { Person } from "./person";
import _ from 'lodash';
import { Resolver, Args, ResolveProperty, Parent, Query } from "@nestjs/graphql";
import { EntityService } from "../services";
import { Loader } from 'nestjs-dataloader';
import { PersonHierarchy, PersonHierarchyKey, PersonHierarchyLoader } from "../person-hierarchy";
import DataLoader = require("dataloader");

@Resolver(of => Person)
export class PersonResolver {
  constructor(private readonly service: EntityService) {}

  @Query(returns => Person, { nullable: true })
  async person(
    @Args('id') id: string,
  ) {
    return await this.service.get('Persons', {
        Id: id
    });
  }

  @ResolveProperty('PersonHierarchies', returns => [PersonHierarchy], {
    nullable: true,
  })
  async PersonHierarchies(
    @Parent() person: Person,
    @Loader(PersonHierarchyLoader.name)
    personLoader: DataLoader<PersonHierarchyKey, PersonHierarchy[]>,
  ) {
    const result = await personLoader.load({
      Id: person.Id
    });

    if (_.isEmpty(result[0])) {
      return [];
    }
    return result;
  }


}
