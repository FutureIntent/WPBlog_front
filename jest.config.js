module.exports = {
    preset: 'ts-jest',
    globals: {
        // we must specify a custom tsconfig for tests because we need the typescript transform
        // to transform jsx into js rather than leaving it jsx such as the next build requires.  you
        // can see this setting in tsconfig.jest.json -> "jsx": "react"
        'ts-jest': {
            tsconfig: 'tsconfig.jest.json',
        },
    },
    // The root of your source code, typically /src
    // `<rootDir>` is a token Jest substitutes
    roots: ['<rootDir>/src/'],
    testEnvironment: 'jsdom',
    // Jest transformations -- this adds support for TypeScript
    // using ts-jest
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },

    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '@testing-library/jest-dom'],

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: 'test.(ts|tsx)$',

    // Module file extensions for importing
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^@assets$': ['<rootDir>/src/assets'],
        '^@assets(.*)$': ['<rootDir>/src/assets$1'],
        '^@theme$': ['<rootDir>/src/theme'],
        '^@theme(.*)$': ['<rootDir>/src/theme$1'],
        '^@pages$': ['<rootDir>/src/pages'],
        '^@pages(.*)$': ['<rootDir>/src/pages$1'],
        '^@components(.*)$': ['<rootDir>/src/components$1'],
        '^@providers$': ['<rootDir>/src/providers'],
        '^@providers(.*)$': ['<rootDir>/src/providers$1'],
        '^@utils(.*)$': ['<rootDir>/src/utils$1'],
        '^@hooks$': ['<rootDir>/src/hooks'],
        '^@hooks(.*)$': ['<rootDir>/src/hooks$1'],
        '^@static': ['<rootDir>/src/static'],
        '^@static(.*)$': ['<rootDir>/src/static$1'],

        '^src(.*)$': ['<rootDir>/src$1'],
    },
};
