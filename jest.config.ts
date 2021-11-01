/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/(services|controllers)/**/*.ts',
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)'],
};
