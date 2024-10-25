# API REST con Node.js

API REST creada con Node.js para manejar operaciones básicas en una aplicación web.

## Características

- **Tecnologías**: TypeScript, Node.js, MongoDB.
- **Arquitectura**: Diseño modular y escalable.
- **Endpoints**: CRUD básico para gestionar recursos.

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/w0zner/api_rest_njs.git
    ```
2. Instala las dependencias:

    ```bash
    npm install
    ```
## Variables de entorno

Para correr este proyecto, necesitas agregar las siguientes variables de entorno en un archivo .env en la raiz del proyecto

`PORT` - [Puerto en el que va correr la apliación]

`CONNECTION_DB_MONGO_LOCAL` - [String de conexión a la BD]

`SECRET_KEY` - [Hash para el token de autorización]

`ALLOWED_CORS` - [URL del cliente]

## Uso

1. Ejecuta el servidor:

    ```bash
    npm run start:dev:local
    ```

2. Accede a la API en `http://localhost:puerto`.

## Licencia

Este proyecto está bajo la licencia MIT.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
