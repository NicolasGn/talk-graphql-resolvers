export default {
  collectCoverage: false,
  globals: {
    'ts-jest': {
      tsconfig: {
        target: 'ESNext',
      },
    },
  },
  preset: 'ts-jest',
  resetMocks: true,
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/helpers/',
    '__fixtures__',
    '_[a-zA-Z0-9]+.ts$',
  ],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
};
