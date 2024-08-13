
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Setup

### Step 1: Create a PostgreSQL Database

First, you'll need to create a PostgreSQL database for your application. You can do this using the `psql` command-line tool or a GUI like pgAdmin.

To create a database via the command-line:

```bash
$ psql -U postgres
postgres=# CREATE DATABASE almadb;
```

### Step 2: Create a `.env` File

In the root of your project, create a `.env` file with the following content to configure the database connection:

```env
# DATABASE
DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_NAME=almadb
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_PORT=5432
```

This file sets up the connection details for the PostgreSQL database.

### Step 3: Synchronize the Database Schema

To ensure your database schema is up-to-date with your application models, add the following script to your `package.json`:

```json
"scripts": {
  ...
  "schema:sync": "typeorm schema:sync"
}
```

Run the script to synchronize your database schema:

```bash
$ npm run schema:sync
```

This command will automatically create tables in your database based on your entities.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
