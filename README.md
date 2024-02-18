# SPANISH

Node Images API

Este es un servidor de imágenes construido con Node.js y Express.js. Permite subir imágenes a diferentes carpetas y recuperarlas mediante una API RESTful.

Instalación

1. Clona este repositorio en tu máquina local:

   git clone https://github.com/tu-usuario/node-images-api.git

2. Accede al directorio del proyecto:

   cd node-images-api

3. Instala las dependencias utilizando npm:

   npm install

Uso

Subir una imagen

Para subir una imagen, realiza una solicitud POST a la ruta /upload/:folder, donde :folder es el nombre de la carpeta en la que deseas guardar la imagen. Adjunta el archivo de imagen en la solicitud utilizando el nombre de campo file.

Ejemplo usando cURL:

curl -X POST -F "file=@/path/to/image.jpg" http://localhost:3000/upload/posts

Obtener una imagen

Para obtener una imagen, realiza una solicitud GET a la ruta /image/:imageName, donde :imageName es el nombre de la imagen que deseas recuperar.

Ejemplo usando cURL:

curl http://localhost:3000/image/folder/image.jpg --output image.jpg

Configuración de variables de entorno

El servidor utiliza variables de entorno para la configuración. Antes de ejecutar el servidor, asegúrate de crear un archivo .env en el directorio raíz del proyecto y configurar las siguientes variables:

PORT=3000
TOKEN=your_token_here

- PORT: El puerto en el que se ejecutará el servidor (por defecto es 3000).
- TOKEN: El token de autorización necesario para subir imágenes.

Licencia

Este proyecto está licenciado bajo la Licencia MIT.

# ENGLISH
Node Images API

This is an image server built with Node.js and Express.js. It allows you to upload images to different folders and retrieve them via a RESTful API.

Installation

1. Clone this repository to your local machine:

   git clone https://github.com/your-username/node-images-api.git

2. Navigate to the project directory:

   cd node-images-api

3. Install the dependencies using npm:

   npm install

Usage

Upload an Image

To upload an image, make a POST request to the /upload/:folder route, where :folder is the name of the folder where you want to store the image. Attach the image file to the request using the file field name.

Example using cURL:

curl -X POST -F "file=@/path/to/image.jpg" http://localhost:3000/upload/posts

Retrieve an Image

To retrieve an image, make a GET request to the /image/:imageName route, where :imageName is the name of the image you want to retrieve.

Example using cURL:

curl http://localhost:3000/image/folder/image.jpg --output image.jpg

Environment Variables Configuration

The server uses environment variables for configuration. Before running the server, make sure to create a .env file in the project's root directory and configure the following variables:

PORT=3000
TOKEN=your_token_here

- PORT: The port on which the server will run (default is 3000).
- TOKEN: The authorization token required to upload images.

License

This project is licensed under the MIT License.

