# Entrega Final Backend III

## Alumna

Marta Aguirre

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
git clone https://github.com/MartaAgM10/EntregaFinal-Backend3.git
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

### Descripción de carpetas

- config/: configuración de MongoDB y Passport.
- controllers/: lógica de negocio de cada endpoint.
- models/: esquemas y modelos de MongoDB.
- routes/: definición de rutas de la API.
- utils/: utilidades para JWT y hash de contraseñas.
- test/: pruebas funcionales de la aplicación.

## Testing

Ejecutar todos los tests:

```bash
npm test
```

### Evidencia de testing

Resultado obtenido:

Ver captura de ejecución de tests adjunta en el documento.

## Cobertura de tests

Se implementaron tests funcionales para todos los endpoints de:

- GET /api/adoptions
- GET /api/adoptions/:aid
- POST /api/adoptions
- DELETE /api/adoptions/:aid

Incluyendo escenarios de:

- Éxito
- Recursos inexistentes (404)
- Validación de datos obligatorios

## Docker

Construir la imagen:

```bash
docker build -t backend3-martaag:1.0 .
```

Ejecutar el contenedor:

```bash
docker run -p 3000:3000 backend3-martaag:1.0
```

### Nota

La aplicación requiere una instancia de MongoDB accesible mediante la variable MONGO_URL para funcionar correctamente dentro del contenedor.

### Dockerfile

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

### Publicación en Docker Hub

Repositorio público:

https://hub.docker.com/r/martaag/backend3-martaag
Imagen publicada:

Etiquetar la imagen

```bash
docker tag backend3-martaag:1.0 martaag/backend3-martaag:1.0
```

Publicar la imagen

```bash
docker push martaag/backend3-martaag:1.0
```

Descargar la imagen

```bash
docker pull martaag/backend3-martaag:1.0
```

### Observaciones

La aplicación requiere una instancia de MongoDB accesible mediante la variable:

```env
MONGO_URL
```

Por defecto:

```env
mongodb://localhost:27017/PRE-ENTREGA-MartaAg
```

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

Marta Aguirre
