module.exports = {
    singleQuote: true,
    trailingComma: 'es5',
    arrowParens: 'always',
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.json'],
            options: {
                semi: true,
                tabWidth: 2,
            },
        },
    ],
};
