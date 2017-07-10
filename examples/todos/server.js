import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from './webpack.config.js';
import express from 'express';

const app = new express();
const port = 3000;
let __dirname;
let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
    res.sendFile(__dirname, '/index.html');
});

app.listen(port, function(err) {
    if(err) {
        // console.error(err);
    }else {
        // console.info(port);
    }
});