import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class PersonHierarchy{

  @Field()
  Id: string;

  @Field()
  ClientName: string;

  
  @Field({ nullable: true })
  Product?: string;

  @Field({ nullable: true })
  Market?: string;

}
