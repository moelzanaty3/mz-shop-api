# MZ Shop API

## Table of Contents

- [MZ Shop API](#mz-shop-api)
  - [Table of Contents](#table-of-contents)
  - [About the Project](#about-the-project)
  - [API(s)](#apis)
  - [Development strategy](#development-strategy)
  - [Getting Started](#getting-started)
  - [Built With](#built-with)
  - [Test](#test)
  - [License](#license)

## About the Project

This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS. You will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

## API(s)

- [Fake Store API](https://fakestoreapi.com/) - Fake store rest API for your e-commerce or shopping website prototype

## Development strategy

1. Integrate with Fake Store API
2. Create CRUD APIs for products
3. Write Unit Test

## Getting Started

1. Download or clone the project:

```bash
git clone https://github.com/mohammedelzanaty/mz-shop-api.git [folder_name]
```

2. Install dependencies

```bash
yarn
```

3. Start the server

```bash
yarn start
```

4. Setup the environment development or production

```bash
npm run build-dev
```

or

```bash
npm run build-prod
```

5. Test with Jest

```bash
npm run test
```

## Built With

- [Webpack](https://webpack.js.org/concepts/) - Asset Management
- [Babel](https://babeljs.io/) - JavaScript Compiler
- [Node.js](https://nodejs.org/en/) - JavaScript Runtime
- [Express.js](https://expressjs.com/) - Server Framework for Node.js
- [Jest](https://jestjs.io/) - Testing suit
- [Service Workers](https://developers.google.com/web/fundamentals/primers/service-workers) - For offline capability

## Test

To test the application, run

```bash
npm run test
```

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
