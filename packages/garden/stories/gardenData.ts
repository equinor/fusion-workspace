import { faker } from '@faker-js/faker';

export type User = {
	userId: string;
	username: string;
	email: string;
	avatar: string;
	password: string;
	birthdate: Date;
};

export const USERS: User[] = [];
function createRandomUser(): User {
	return {
		userId: faker.datatype.uuid(),
		username: faker.internet.userName(),
		email: faker.internet.email(),
		avatar: faker.image.avatar(),
		password: faker.internet.password(),
		birthdate: faker.date.birthdate(),
	};
}
Array.from({ length: 10 }).forEach(() => {
	USERS.push(createRandomUser());
});
