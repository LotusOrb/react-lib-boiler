module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:storybook/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint", "prettier"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"prettier/prettier": "error",
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"keyword-spacing": 2,
		"comma-spacing": 2,
		"padding-line-between-statements": [
			"error",
			{
				blankLine: "always",
				prev: "*",
				next: "*",
			},
			{
				blankLine: "never",
				prev: "*",
				next: "import",
			},
		],
		"no-console": 1,
		"react/prop-types": 0,
		"react/require-default-props": 2,
		"react/no-multi-comp": 2,
		"react/self-closing-comp": 2,
		"react/react-in-jsx-scope": 2,
		"react/display-name": 2,
	},
};
