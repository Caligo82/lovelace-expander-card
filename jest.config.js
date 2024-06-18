module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    "<rootDir>/node_modules/!(yrv)",
    "<rootDir>/node_modules/.pnpm/!(yrv)"
  ],
  testEnvironment: "jsdom",
  moduleFileExtensions: ['js', 'svelte'],
}