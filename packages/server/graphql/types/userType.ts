import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserType {
    @Field()
    name: string;
}

