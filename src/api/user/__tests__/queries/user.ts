import { QueryUserArgs } from 'graphql.types';
import services from 'services';
import { getUserFixture } from '__fixtures__/User';
import { exql } from '__tests__/helpers/graphql';

const QUERY = /* GraphQL */ `
  query GetUser($userId: ID!) {
    user(userId: $userId) {
      id
      name
      codeName
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
    const user = getUserFixture({
      name: 'Bob',
    });

    getUserSpy.mockResolvedValue(user);

    const result = await exql<QueryUserArgs>(QUERY, {
      userId: user.id,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual({
      user: {
        id: user.id,
        name: user.name,
        codeName: 'B.O.B',
        email: user.email,
        phone: user.phone,
      },
    });
  });
});
