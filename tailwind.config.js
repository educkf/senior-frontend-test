const { spacing } = require("tailwindcss/defaultTheme");

module.exports = {
	theme: {
		fontFamily: {
			sans: ["proxima-nova", "Open Sans", "sans-serif"],
		},
		extend: {
			colors: {
				pastelPink: "#ff7b92",
				pastelGreen: "#33a6ba",
				pastelYellow: "#ffc062",
				grayLight: "#989ea7",
				grayDark: "#313e4f",
			},
			spacing: {
				72: "18rem",
				80: "20rem",
			},
			maxHeight: {
				fit: "500px",
				0: "0",
			},
			minHeight: {
				32: "8rem",
				40: "10rem",
			},
			transitionProperty: {
				maxHeight: "max-height",
			},
		},
	},
};
