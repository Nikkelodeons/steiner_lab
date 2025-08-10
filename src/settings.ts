export const template = {
	export const template = {
	website_url: 'https://nikkelodeons.github.io', // Astro needs to know your site's deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'dark', // Using dark theme as default
	darkTheme: 'dark', // Using dark theme for both light and dark modes
	excerptLength: 200,
	postPerPage: 5,
    base: '/steiner_lab' // Repository name starting with /rl: 'https://nikkelodeons.github.io',
	base: '/steiner_lab',
}

export const profile = {
	fullName: 'Steiner Lab',
	title: '',
	institute: '',
	author_name: 'Steiner Lab', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: '',
	linkedin: '',
	x: 'https://www.x.com/',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'dark', // Using dark theme as default
	darkTheme: 'dark', // Using dark theme for both light and dark modes
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: 'Steiner Lab',
	default_description: '<Insert description>',
	default_image: '/images/astro-academia.png',
}
