<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Descripción

Repositorio inicial del framework [Nest](https://github.com/nestjs/nest) en TypeScript.

## Configuracion DataBase

### 1: Crear una Base de Datos PostgreSQL

Primero, necesitas crear una base de datos PostgreSQL para tu aplicación. Puedes hacer esto utilizando la herramienta de línea de comandos psql o una interfaz gráfica como pgAdmin.

Para crear una base de datos desde la línea de comandos:
```bash
$ psql -U postgres
postgres=# CREATE DATABASE almadb;
```

### 2: Crear un Archivo `.env`

En la raíz de tu proyecto, crea un archivo .env con el siguiente contenido para configurar la conexión a la base de datos:

```env
# DATABASE
DATABASE_TYPE=postgres
DATABASE_HOST=localhost
DATABASE_NAME=almadb
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=postgres
DATABASE_PORT=5432
```

Este archivo establece los detalles de la conexión para la base de datos PostgreSQL.

### 3: Sincronizar el Esquema de la Base de Datos

Para asegurar que el esquema de tu base de datos esté actualizado con los modelos de tu aplicación, agrega el siguiente script a tu archivo package.json:

```json
"scripts": {
  ...
  "schema:sync": "typeorm schema:sync"
}
```

Ejecuta el script para sincronizar el esquema de tu base de datos:

```bash
$ npm run schema:sync
```

Este comando creará automáticamente las tablas en tu base de datos basadas en tus entidades.

## Instalación

```bash
$ npm install

## Ejecucion de la aplicacion

```bash
# desarrollo
$ npm run start

# modo observacion
$ npm run start:dev

# modo produccion
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Soporte

Nest es un proyecto de código abierto licenciado bajo MIT. Puede crecer gracias a los patrocinadores y al apoyo de increíbles colaboradores. Si deseas unirte a ellos, por favor. [lee más aquí](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
