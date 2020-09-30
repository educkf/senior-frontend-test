export default {
	mode: "universal",
	components: true,
	target: "static",

	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				href: "https://use.typekit.net/lyg3ywe.css",
			},
		],
	},

	plugins: [],

	buildModules: [
		"@nuxtjs/tailwindcss", // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
	],

	modules: [],

	build: {
		extend(config, ctx) {},
	},
};
