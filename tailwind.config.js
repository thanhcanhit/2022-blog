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
			},
			backgroundImage: {
				"hero-pattern": "url('./assets/img/Dot.png')",
			},
		},
	},
	plugins: [],
};
