let mix = require('laravel-mix');

mix.js('src/js/script.js', 'js');

mix.sass('src/scss/app.scss', 'css').options({
	processCssUrls: false,
	postCss: [
		require('autoprefixer')({
			overrideBrowserslist: ['last 2 versions'],
			cascade: false,
		}),
		require('cssnano')({
			preset: 'default',
		}),
	],
});
mix.copyDirectory('src/images', 'public/images');
mix.copyDirectory('src/fonts', 'public/fonts');
mix.setPublicPath('public');

mix.version();
