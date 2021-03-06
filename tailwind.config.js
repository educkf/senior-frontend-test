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
			transitionDuration: {
				10000: "10000ms",
			},
		},
	},
	purge: {
		content: ["./src/**/*.vue", "./src/**/*.css", "./src/**/*.html"],

		options: {
			whitelist: [
				"bg-pastelPink",
				"bg-pastelGreen",
				"bg-pastelYellow",
				"bg-grayLight",
				"bg-grayDark",
				"text-pastelPink",
				"text-pastelGreen",
				"text-pastelYellow",
				"text-grayLight",
				"text-grayDark",
				"tk-proxima-nova",
			],
		},
	},
};
