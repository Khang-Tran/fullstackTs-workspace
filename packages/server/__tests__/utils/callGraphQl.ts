import { graphql, GraphQLSchema } from 'graphql';
import { GraphQL } from '../../src/graphql';
import Maybe from 'graphql/tsutils/Maybe';

export interface IOptions {
	source: string;
	variableValues?: Maybe<{
		[key: string]: any;
	}>;
}

export const callGraphQL = async ({ source, variableValues }: IOptions) => {
	const schema: GraphQLSchema = await new GraphQL().createSchema();
	return graphql({
		schema,
		source,
		variableValues
	});
};
