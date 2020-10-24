require('babel-register');

require.extensions['.css', '.png', '.jpeg', '.jpg'] = function () {
  return null;
};

const router = require('./src/App').default;
const Sitemap = require('react-router-sitemap').default;

(
	new Sitemap(router)
		.build('http://my-site.ru')
		.save('./sitemap.xml')
);