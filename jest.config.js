/** @type {import("jest").Config} */

module.exports = {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['tsx', 'ts', 'js'],
  modulePaths: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    '^@root/(.*)': '<rootDir>src/$1',
    '^@components/(.*)': '<rootDir>src/components/$1',
    '^@constants/(.*)': '<rootDir>src/constants/$1',
    '^@assets/(.*)': '<rootDir>src/assets/$1',
    '^@utils/(.*)': '<rootDir>src/utils/$1',
    '^@pages/(.*)': '<rootDir>src/pages/$1',
    '^@app-types/(.*)': '<rootDir>src/types/$1',
    '^@services/(.*)': '<rootDir>src/services/$1',
    '^@hooks/(.*)': '<rootDir>src/hooks/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/__mocks__/setupTests.ts'],
};
