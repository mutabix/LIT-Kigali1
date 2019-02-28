module.exports = {
  verbose: true,
  testEnvironment: 'node',
  setupFiles: ['./jest.setup.js'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coveragePathIgnorePatterns: [
    'coverage',
    'node_modules',
    'middlewares',
    'index.js',
    'app.js',
    'database',
    '__tests__',
    '__mocks__',
    'config',
    'ui'
  ],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
