/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				dark: {
					...require('daisyui/src/theming/themes')["dark"],
					'base-content': '#d6d3d1'
				}
			},
			'light',
			'cupcake',
			'business'
		],
		darkTheme: 'dark',
		logs: false
	}
};
