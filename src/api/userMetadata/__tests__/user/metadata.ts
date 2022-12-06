import { QueryUserArgs } from 'graphql.types';
import services from 'services';
import { OnboardingStatus } from 'services/users/model';
import { getUserFixture } from '__fixtures__/User';
import { getUserMetadataFixture } from '__fixtures__/UserMetadata';
import { exql } from '__tests__/helpers/graphql';

const QUERY = /* GraphQL */ `
  query GetUserMetadata($userId: ID!) {
    user(userId: $userId) {
      id
      metadata {
        isDeveloper
        onboardingStatus
      }
    }
  }
`;

describe('resolvers > User.metadata', () => {
  let getUserSpy: jest.SpyInstance;
  let getUserMetadataSpy: jest.SpyInstance;

  beforeEach(() => {
    getUserSpy = jest.spyOn(services.users, 'getUser');
    getUserMetadataSpy = jest.spyOn(services.users, 'getUserMetadata');
  });

  it('should return complete user metadata', async () => {
    const user = getUserFixture();
    const metadata = getUserMetadataFixture({
      userId: user.id,
      role: 'developer',
      onboardingStatus: OnboardingStatus.UNDER_REVIEW,
    });

    getUserSpy.mockResolvedValue(user);
    getUserMetadataSpy.mockResolvedValue(metadata);

    const result = await exql<QueryUserArgs>(QUERY, {
      userId: user.id,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data).toEqual({
      user: {
        id: user.id,
        metadata: {
          isDeveloper: true,
          onboardingStatus: 'UnderReview',
        },
      },
    });
  });
});
