// webpack.config.js

'use strict';

const path = require('path');
const { styles } = require('@ckeditor/ckeditor5-dev-utils');

const { CKEditorTranslationsPlugin } = require('@ckeditor/ckeditor5-dev-translations');

module.exports = {
	// https://webpack.js.org/configuration/entry-context/
	entry: path.resolve(__dirname, 'ckeditor.ts'),

	// https://webpack.js.org/configuration/output/
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},

	// // 找不到官方文件了
	// plugins: [
	// 	new CKEditorTranslationsPlugin({
	// 		// UI language. Language codes follow the https://en.wikipedia.org/wiki/ISO_639-1 format.
	// 		// When changing the built-in language, remember to also change it in the editor's configuration (src/ckeditor.ts).
	// 		language: 'zh_TW',
	// 		// additionalLanguages: 'all'
	// 	}),
	// ],

	module: {
		rules: [
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,

				use: ['raw-loader']
			},
			{
				test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,

				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'singletonStyleTag',
							attributes: {
								'data-cke': true
							}
						}
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: styles.getPostCssConfig({
								themeImporter: {
									themePath: require.resolve('@ckeditor/ckeditor5-theme-lark')
								},
								minify: true
							})
						}
					}
				]
			}
		]
	},

	// Useful for debugging.
	devtool: 'source-map',

	// By default webpack logs warnings if the bundle is bigger than 200kb.
	performance: { hints: false }
};
