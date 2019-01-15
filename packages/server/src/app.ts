import 'reflect-metadata';
import * as express from 'express';
import { UserResolver } from './graphql/resolvers/userResolver';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';

class App {
	public app: express.Application;
	public apolloServer: ApolloServer;

	constructor() {
		this.app = express();
		this.configGraphql().catch((err: Error) =>
			// tslint:disable-next-line
			console.log(`Cannot create Apollo Server ${err.message}`)
		);
		createConnection()
			.then(() =>
				// tslint:disable-next-line
				console.log('TypeOrm connected.')
			)
			.catch((err: Error) => `Cannot connect to TypeOrm ${err.message}`);
	}

	private configGraphql = async (): Promise<void> => {
		const schema = await buildSchema({ resolvers: [UserResolver] });
		this.apolloServer = new ApolloServer({ schema });
		this.apolloServer.applyMiddleware({ app: this.app });
	};
}

export default new App().app;
