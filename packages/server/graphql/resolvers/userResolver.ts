import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { UserType } from '../types/userType';
import * as bcrypt from 'bcryptjs';
import { User } from '../../entity/User';

@Resolver(UserType)
export class UserResolver {
	@Query(() => User)
	async user(@Arg('email') email: string) {
		return User.findOne({ email });
	}

	@Mutation(() => User)
	async register(
		@Arg('firstName') firstName: string,
		@Arg('lastName') lastName: string,
		@Arg('email') email: string,
		@Arg('password') password: string
	): Promise<User> {
		const hash = await bcrypt.hash(password, 10);
		return await User.create({
			firstName,
			lastName,
			email,
			password: hash
		}).save();
	}
}
