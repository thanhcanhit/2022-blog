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
				yellow: "#FEC260",
				"dark-black": "#191919",
			},
			gap: {
				50: "50px",
			},
			fontSize: {
				13: "13px",
				14: "14px",
				15: "15px",
				16: "16px",
				18: "18px",
				20: "20px",
				24: "24px",
				36: "36px",
				64: "64px",
			},
			width: {
				50: "50px",
				100: "100px",
				"category-card": "180px",
				200: "200px",
				250: "250px",
			},
			height: {
				50: "50px",
				header: "80px",
				100: "100px",
				150: "150px",
				200: "200px",
				"card-img": "220px",
				250: "250px",
			},
			minHeight: {
				300: "300px",
			},
			margin: {
				50: "50px",
				100: "100px",
			},
			padding: {
				50: "50px",
				header: "80px",
				150: "100px",
			},
			boxShadow: {
				heading: "4px 6px 13px rgba(215, 215, 215, 0.25);",
				card: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
			},
			backgroundImage: {
				"hero-pattern": "url('./assets/img/Dot.png')",
			},
			animation: {
				wiggle: "wiggle 1s ease-in-out infinite",
				spinSlow: "spin 5s linear infinite",
				flyUp: "flyUp .5s ease-in-out",
				tooltip: "tooltip .3s ease-in-out",
			},
			keyframes: {
				wiggle: {
					"0%, 100%": { transform: "rotate(-3deg)" },
					"50%": { transform: "rotate(3deg)" },
				},
				flyUp: {
					"0%": { transform: "translate(0, 16px)", opacity: 0 },
					"100%": { transform: "translate(0, 0)", opacity: 1 },
				},
				tooltip: {
					"0%": { transform: "translate(-50%, 8px)", opacity: 0 },
					"100%": { transform: "translate(-50%, 0)", opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};
