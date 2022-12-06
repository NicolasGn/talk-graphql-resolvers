import { User } from 'services/users/model';

export const getUserFixture = (dataOverride?: Partial<User>): User => {
  return {
    id: '__USER_ID__',
    name: '__USER_NAME__',
    email: 'user@email.fr',
    phone: '+33600000000',
    passwordHash: '__PASSWORD__HASH__',
    ...dataOverride,
  };
};
