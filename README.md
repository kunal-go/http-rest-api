# Http Rest Api

Simple and type-safe developer oriented rest api server for [Node.js](http://nodejs.org).

```js
const { HttpServer } = require("http-rest-api")
const server = new HttpServer(3000)

const api = new HttpRestApi({
	method: "get",
	path: "/",
	handler: () => {
		return { message: "Hello World" }
	},
})

server.registerRestApis([api])
server.listen()
```

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
version 14.0 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
npm install http-rest-api
```

You can also install by [yarn](https://yarnpkg.com/):

```console
yarn add http-rest-api
```

## Features

-   Built on top of [express](https://www.npmjs.com/package/express) which gives all the flexibility, performance and robustness
-   Express middleware support
-   Built in typescript declarations
-   Very easy and flexible to create apis
-   Custom http errors

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
