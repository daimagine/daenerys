// each package will loaded like waterfall.
// so make sure the most needed script is on the top.
var s = {
	plugin:
	[
		'/assets/scripts/plugins.min.js',
		'/assets/scripts/global.min.js'
	],
	init:
	[
		'/assets/scripts/init.min.js'
	],
	app:
	[
		'/assets/scripts/app.min.js'
	]
};