/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    name: "Boiler",
    testEnvironment: "jest-environment-jsdom",
    verbose: true,
    testMatch: ["<rootDir>/src/**/*.test.tsx"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect","./src/setupTest.ts"],
    collectCoverage:true,
    collectCoverageFrom:[
        "!**/node_modules/**",
        "src/**/*.{ts,tsx}",
        "!src/**/*.stories.{ts,tsx}",
        "!src/**/index.{ts,tsx}",
    ],
};

module.exports = config;