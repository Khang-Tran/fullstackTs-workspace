import { GraphQLSchema } from 'graphql';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/userResolver';

export class GraphQL {
	public createSchema = async (): Promise<GraphQLSchema> => {
		return buildSchema({ resolvers: [UserResolver] });
	};
}
