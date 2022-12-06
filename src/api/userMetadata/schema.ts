import { gql } from 'apollo-server-core';

const schema = gql`
  enum OnboardingStatus {
    AccountCreated
    UnderReview
    Validated
  }

  type UserMetadata {
    isDeveloper: Boolean!
    onboardingStatus: OnboardingStatus!
  }

  extend type User {
    metadata: UserMetadata!
  }
`;

export default schema;
