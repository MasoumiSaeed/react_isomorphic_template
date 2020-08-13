import fs from 'fs';
import path from 'path';
import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchPath } from 'react-router';

import { App } from '../shared/app';
import ROUTES from '../configuration/routes';

const PORT = 3001;
const app = express();
app.use(express.static('dist/public'));
app.get('*', (req, res) => {
	const isRouteAvailable = ROUTES.find(route => {
		return matchPath(req.url, route);
	});
	if (!isRouteAvailable) {
		const errorFile = path.resolve('src/shared/common/404.html');
		fs.readFile(errorFile, 'utf8', (err, data) => {
			if (err) {
				console.error(`500:Could not read '${errorFile}'`, err);
				return res.status(500).send('I/O Exception');
			}
			return res.status(404).send(
				data.replace('PAGE_URL', `${req.url}`)
			);
		});
		console.log(`404:'${req.url}' requested by ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
		return;
	}
	else {
		const context = {};
		//Server-side Rendring
		const reactMarkup = ReactDOMServer.renderToString(
			<StaticRouter context={context} location={req.url}>
				<App />
			</StaticRouter>
		);
		if (req.url === "/favicon.ico") {
			console.log(`200:'${req.url}' requested by ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
			return res.sendFile("favicon.ico", { root: "src/shared/common" });
		}
		if (context && context.url && context.status === 301) {
			console.log(`301:Redirected from ${context.referrer} to ${context.url}`);
			return res.redirect(301, 'http://' + req.headers.host + context.url);
		}
		const indexFile = path.resolve('src/shared/common/index.html');
		fs.readFile(indexFile, 'utf8', (err, data) => {
			if (err) {
				console.error(`500:Could not read '${indexFile}'`, err);
				return res.status(500).send('I/O Exception');
			}
			console.log(`200:'${req.url}' requested by ${req.headers['x-forwarded-for'] || req.connection.remoteAddress}`);
			
			return res.status(200).send(
				data.replace('APP_COMPONENT', `${reactMarkup}`)
			);
		});
	}
});
app.listen(PORT, () => {
	console.log(`SSR React router app running at ${PORT}`);
});

