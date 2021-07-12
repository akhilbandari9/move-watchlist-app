module.exports = {
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			boxShadow: {
				green: '2px 2px 8px 3px rgba(0, 255, 0, 0.15)',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['active'],
			backgroundOpacity: ['active'],
		},
	},
	plugins: [],
}
