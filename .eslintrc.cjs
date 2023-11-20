module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        '@hh.ru/eslint-config',
        // 'eslint:recommended',
        // 'prettier',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:react-hooks/recommended',
    ],
    overrides: [
        {
            files: './src*.{ts,tsx}',
            extends: '@hh.ru/eslint-config/typescript',
        },
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'import/no-absolute-path': 0,
        'no-use-before-define': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
