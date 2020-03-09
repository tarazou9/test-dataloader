import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Person{
  @Field()
  ClientName: string;

  @Field()
  Id: string;

  @Field({ nullable: true })
  Name?: string;

  @Field({ nullable: true })
  FirstName?: string;

  @Field({ nullable: true })
  LastName?: string;

  @Field({ nullable: true })
  MiddleName?: string;
}
