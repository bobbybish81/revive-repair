const fs = require('fs');
const path = require('path');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { getRoutes } = require('react-router-config');
const xmlbuilder = require('xmlbuilder');

const routes = [
  { path: '/', exact: true },
  { path: '/services' },
  { path: '/gallery' },
  { path: '/termsandconditions' },
];

const generateSitemap = () => {
  const baseUrl = 'https://reviverepairs.com';

  const sitemap = xmlbuilder.create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  });

  routes.forEach(route => {
    const routePath = route.path;
    const url = baseUrl + routePath;

    const urlNode = sitemap
      .ele('url')
      .ele('loc')
      .txt(url)
      .up()
      .ele('priority')
      .txt('0.5')
      .up();
  });

  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap.end({ pretty: true }));
};

