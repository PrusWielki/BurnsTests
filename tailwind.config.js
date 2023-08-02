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
	daisyui: {
		themes: [
			{
				dark: {
					// eslint-disable-next-line @typescript-eslint/no-var-requires
					...require('daisyui/src/colors/themes')['[data-theme=dark]'],
					'base-content': '#e4e4e7',
					'neutral-content': '#e4e4e7'
				}
			}
		]
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
