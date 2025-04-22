// tailwind.config.js
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"@/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-manrope)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
