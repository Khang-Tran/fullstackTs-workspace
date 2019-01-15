import gql from 'graphql-tag';

export const GET_USER_BY_EMAIL = gql`
	query {
		user(email: "kael@gmail.com") {
			lastName
		}
	}
`;
