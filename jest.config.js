module.exports = {
    verbose: true,
    roots: ["<rootDir>/src/", "<rootDir>/specs/"],
    moduleFileExtensions: ['js', 'vue'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        "^.+\\.js$": "babel-jest",
        // process `*.vue` files with `vue-jest`
        ".*\\.(vue)$": "vue-jest"
    }
}