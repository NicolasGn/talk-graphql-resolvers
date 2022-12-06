import { QueryUserArgs } from 'graphql.types';
import services from 'services';
import { getUserFixture } from '__fixtures__/User';
import { exql } from '__tests__/helpers/graphql';

const QUERY = /* GraphQL */ `
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      id
      name
      email
      phone
    }
  }
`;

describe('resolvers > Query.user', () => {
  let getUserSpy: jest.SpyInstance;

  beforeEach(() => {
    getUserSpy = jest.spyOn(services.users, 'getUser');
  });

  it('should return a complete user', async () => {
    const user = getUserFixture();

    getUserSpy.mockResolvedValue(user);

    const result = await exql<QueryUserArgs>(QUERY, {
      userId: user.id,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });
  });
});
