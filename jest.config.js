module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/*.ts', '<rootDir>/src/marmoset-viewer.vue'],
  moduleDirectories: ['node_modules', '<rootDir>/src', '<rootDir>/test'],
  moduleFileExtensions: ['js', 'ts', 'vue'],
  moduleNameMapper: {
    '@/(.+)$': '<rootDir>/src/$1',
    '~/(.+)$': '<rootDir>/test/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue-jest',
  },
}
