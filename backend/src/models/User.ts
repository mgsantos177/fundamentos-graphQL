import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field((_types) => ID)
  id: string;

  @Field()
  name: string;
}