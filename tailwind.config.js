/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		fontFamily: {
			jakarta: ["Plus Jakarta Sans", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#6fc183",
				"light-grey-1": "#EFF0F3",
				"light-grey-2": "#E4E5E9",
				grey: "#C0C0C0",
				"dark-grey": "#9A9494",
				white: "#FFFFFE",
				black: "#2B2C34",
			},
			fontSize: {
				14: "14px",
				16: "16px",
				18: "18px",
				20: "20px",
				36: "36px",
				64: "64px",
			},
			boxShadow: {
				c1: "4px 6px 13px rgba(215, 215, 215, 0.25);",
				s4: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
			},
			backgroundImage: {
				"hero-pattern": "url('./assets/img/Dot.png')",
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				spinSlow: "spin 5s linear infinite",
				tooltip: "tooltip .3s ease-in-out",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				tooltip: {
					"0%": { transform: "translate(-50%, 8px)", opacity: 0 },
					"100%": { transform: "translate(-50%, 0)", opacity: 1 },
				}
			},
		},
	},
	plugins: [],
};
