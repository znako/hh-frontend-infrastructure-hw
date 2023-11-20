module.exports = {
    extends: ['@hh.ru/stylelint-config-hh', 'stylelint-config-prettier'],
    plugins: ['stylelint-prettier'],
    rules: {
        'selector-max-id': 1,
        'declaration-property-value-disallowed-list': null,
        'declaration-property-value-allowed-list': null,
    },
    ignoreFiles: ['dist/assets/*.css'],
};
