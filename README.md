# Isomorphic React template

![N|](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png)
#
The combination of client and server rendering is known as Isomorphic rendering. Isomorphic react template is usefull when you want to create an isomorphic react application without using create-react-app tool. By using this template you will be able to use the following methods:

  - Routing by defining the set of routes in json file (It will check with regular expression later in express so you can use routes with parameters as well)
  - Server-side rendering (StaticRouter, ReactDOMServer, staticContext & Redirect)
  - Client-side rendering (BrowserRouter, HashRouter)
  - Isomorphic (First request will render in server-side then will chain to clint side rendering)

# Why not using CRA (Create-react-app)?

  - There is less code, as it is shared by both the client and the server.

### Packages

Isomorphic React template uses a number of open source packages to work properly:

* [Express] - a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [React] - an open-source JavaScript library for building user interfaces or UI components.
* [Babel] - a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language. 
* [Webpack] - a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.
* [Nodemon] - a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development.

### Installation & Running

Isomorphic React template requires [Node.js](https://nodejs.org/) to run.
###### With npm:
#
```sh
npm install 
```
then
```sh
npm start 
```
###### With yarn:
#
```sh
yarn install 
```
then
```sh
yarn start 
```
Open below url in your browser:
```
http://localhost:3001 
```
###### Tested on Node.js v12.16.2


License
----

Apache-2.0
