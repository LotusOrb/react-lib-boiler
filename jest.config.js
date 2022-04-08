/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    name: "Boiler",
    testEnvironment: "jest-environment-jsdom",
    verbose: true,
    testMatch: ["<rootDir>/src/**/*.test.tsx"],
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

module.exports = config;