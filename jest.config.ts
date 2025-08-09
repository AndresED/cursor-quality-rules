import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageThreshold: {
    global: { branches: 0.8, functions: 0.8, lines: 0.8, statements: 0.8 }
  },
  testTimeout: 10000,
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: { '^.+\\.ts$': 'ts-jest' }
};

export default config;
