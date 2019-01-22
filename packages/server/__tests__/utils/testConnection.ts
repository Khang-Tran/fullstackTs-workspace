import { createConnection } from 'typeorm';

export const createTestConnection = (drop: boolean = false) => {
	return createConnection({
		name: 'test',
		type: 'postgres',
		host: 'ec2-107-20-183-142.compute-1.amazonaws.com',
		port: 5432,
		username: 'zghpjoruupfnsz',
		password:
			'00883a83374374c2f70438993573dcd889b82d06e4916b8d71a2fedd6f21bc2c',
		database: 'dfvlrjfihig712',
		synchronize: drop,
		dropSchema: drop,
		entities: ['../src/entities/*.*']
	});
};
