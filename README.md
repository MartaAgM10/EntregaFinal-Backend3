# Entrega Final Backend III

## Alumna

Marta

## Descripción

Proyecto desarrollado para la entrega final de Backend III utilizando Node.js, Express, MongoDB, Passport, JWT, Docker y testing con Mocha, Chai y Supertest.

## Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Passport
- JWT
- Docker
- Mocha
- Chai
- Supertest

## Instalación

Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Instalar dependencias:

```bash
npm install
```

Ejecutar el proyecto:

```bash
npm run dev
```

o

```bash
npm start
```

## Variables de entorno

Base de datos MongoDB:

```env
MONGO_URL=mongodb://localhost:27017/PRE-ENTREGA-MartaAg
```

## Estructura del proyecto

```txt
src/
├── config/
├── controllers/
│   └── adoption.controller.js
├── models/
│   ├── user.model.js
│   └── adoption.model.js
├── routes/
│   ├── users.router.js
│   ├── sessions.router.js
│   └── adoption.router.js
├── utils/
├── app.js
└── server.js

test/
├── users.test.js
├── sessions.test.js
└── adoptions.test.js
```

## Testing

Ejecutar todos los tests:

```bash
npm test
```

### Evidencia de testing

Resultado obtenido:

```txt
11 passing (488ms)
```

## Docker

Construir la imagen:

```bash
docker build -t backend3-martaag:1.0 .
```

Ejecutar el contenedor:

```bash
docker run -p 3000:3000 backend3-martaag:1.0
```

## Docker Hub

Imagen publicada:

https://hub.docker.com/r/martaag/backend3-martaag

## Funcionalidades implementadas

### Adoptions

- Obtener todas las adopciones
- Obtener una adopción por ID
- Crear una adopción
- Eliminar una adopción

### Sessions

- Registro de usuarios
- Login con JWT
- Autenticación mediante Passport

### Users

- Obtener usuarios
- Obtener usuario por ID
- Actualizar usuario
- Eliminar usuario

## Autor

Marta
