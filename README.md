# Typescript React Starter

A base project for building Typescript & React projects.

This project is built from [Create React App](https://github.com/facebook/create-react-app) and edits it to add [Typescript](https://www.typescriptlang.org/) and CSS Module support.

## Development

### Setup

This project uses [`nvm`](https://github.com/creationix/nvm) so you can set your node version with:

```
nvm use
```

or set it manually to the version set in the `.nvmrc`.

Install dependecies with:

```
yarn
```

### Getting up and running

Run the development server with:

```
yarn start
```

The project will then be running on [localhost:3000](http://localhost:3000).

### Linting, Typechecking, and Code Formatting

This project uses [`eslint`](https://eslint.org/), [`tslint`](https://palantir.github.io/tslint/), and `tsc` for linting and typechecking, as well as [`prettier`](https://prettier.io/) for code formatting.

Run `eslint` with:

```
yarn eslint
```

Run `tslint` with:

```
yarn tslint
```

Run `tsc` with:

```
yarn tsc
```

Run all of these with:

```
yarn lint
```

Prettier code formatting will work out of the box with you editor configured to use `.editorconfig` and format on save enabled.

### Testing

This project is set up to use [Jest](https://jestjs.io/). Run the tests with:

```
yarn test
```

## Production Build

Build a static site for production use with:

```
yarn build
```
