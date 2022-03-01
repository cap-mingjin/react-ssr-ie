global.React = require('anujs/dist/ReactIE');
global.rematch = require('anujs/dist/Rematch');
var path = require('path');
var React = global.React;

var ReactDOMServer = require('react-dom/server');

var express = require('express');
var boom = require('express-boom');
var __basename = path.dirname(__dirname);
var app = express();
app.use(boom());

var ejs = require('ejs');
ejs.delimiter = '?';
app.set('view engine', 'ejs');
app.engine('.html', ejs.__express);

app.use('/bundle', express.static(path.resolve(__basename, '../dist/bundle')));
app.use('/assets', express.static(path.resolve(__basename, '../dist/assets')));
app.use('/lib', express.static(path.resolve(__basename, '../dist/lib')));
app.set('views', path.resolve(__basename, '../dist'));

app.get('/', function(req, res) {
  var Home = require('../client/pages/Home');
  res.render('Home.html', {
    title: 'SSR Demo',
    keywords: 'SSR react express',
    description: 'This is a demo for SSR on IE',
    state: JSON.stringify({ ssr: 'success' }),
    component: ReactDOMServer.renderToString(<Home />)
  });
});

app.get('/input', function(req, res) {
  var Input = require('../client/pages/input');
  res.render('input.html', {
    title: 'SSR Demo',
    keywords: '',
    description: '',
    state: JSON.stringify({}),
    component: ReactDOMServer.renderToString(<Input />)
  });
});
app.get('/page1', function(req, res) {
  var Page1 = require('../client/pages/Page1');
  res.render('Page1.html', {
    title: 'SSR Demo',
    keywords: '',
    description: '',
    state: JSON.stringify({}),
    component: ReactDOMServer.renderToString(<Page1 />)
  });
});

app.get('/test', function(req, res) {
  var TestAjax = require('../client/pages/TestAjax');
  res.render('TestAjax.html', {
    title: 'SSR Demo',
    keywords: '',
    description: '',
    state: JSON.stringify({
      users: [
        { id: '1', name: 'user 1' },
        { id: '2', name: 'user 2' }
      ]
    }),
    component: ReactDOMServer.renderToString(<TestAjax />)
  });
});

var port = 8082;
app.listen(port, function() {
  console.log(`Dev server listening at http://localhost:${port}/`);
});
