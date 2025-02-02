/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  waving: {
				'0%, 60%, 100%': { transform: 'rotate(0deg)' },
				'10%, 30%': { transform: 'rotate(14deg)' },
				'20%': { transform: 'rotate(-8deg)' },
				'40%': { transform: 'rotate(-4deg)' }
			  },
			  line: {
				'0%': { flex : '0' },
				'100%': { flex : '1' }
			  },
			  dash: {
				to: { strokeDashoffset: 0 }
			  },
			  fade: {
				from: {
					opacity: 0,
					transform: 'scale(0.9)'
				},
				to: {
					opacity: 1,
					transform: 'scale(1)'
				}
			  }
			}
		},
	},
	plugins: [],
}
