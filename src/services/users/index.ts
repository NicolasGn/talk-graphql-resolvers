import { users, usersMetadata } from './data';
import { OnboardingStatus, User, UserMetadata } from './model';

const usersDb = new Map<string, User>(users.map((user) => [user.id, user]));

const usersMetadataDb = new Map<string, UserMetadata>(
  usersMetadata.map((metadata) => [metadata.userId, metadata]),
);

const service = {
  getUser: async (userId: string): Promise<User | null> => {
    return usersDb.get(userId) ?? null;
  },
  getUserMetadata: async (userId: string): Promise<UserMetadata | null> => {
    return usersMetadataDb.get(userId) ?? null;
  },
};

export default service;
