/* eslint-disable */
module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks'],
	rules: {
		indent: ['off'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['off'],
		semi: ['error', 'always'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/explicit-module-boundary-types': ['off'],
		'@typescript-eslint/no-explicit-any': ['off'],
		'react/prop-types': ['off'],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': [
			'warn',
			{
				additionalHooks: '(useDebouncedAsyncMemo)',
			},
		],
	},
};
