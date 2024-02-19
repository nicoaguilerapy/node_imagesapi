require('dotenv').config(); // Para cargar las variables de entorno
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const app = express();
const upload = multer({ dest: 'uploads/' });
const path = require('path');
const cors = require('cors');

app.use(cors()); // Habilitar CORS para todas las solicitudes

const checkAuthorization = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || token !== process.env.TOKEN) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    next();
};

// Función para verificar y crear el directorio si no existe
function ensureDirectoryExists(directory) {
    try {
        fs.mkdirSync(directory, { recursive: true });
    } catch (error) {
        throw error;
    }
}

// Ruta base donde se guardarán las imágenes
const UPLOADS_BASE_PATH = path.join(__dirname, 'uploads');

app.post('/upload/:folder', checkAuthorization, upload.single('upload'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    
    const folder = req.params.folder;

    // Define la ruta de la carpeta de destino
    const destinationFolder = path.join(UPLOADS_BASE_PATH, folder);

    try {
        // Verifica y crea el directorio si no existe
        ensureDirectoryExists(destinationFolder);

        // Define la ruta de destino donde se moverá el archivo
        const destinationPath = path.join(destinationFolder, file.originalname);

        // Mueve el archivo a la carpeta de destino
        fs.renameSync(file.path, destinationPath);
        const url = `${req.protocol}://${req.get('host')}/image/content/${file.originalname}`;

    
        res.status(201).json({ fileName: file.originalname, uploaded: true, url: url });
    } catch (error) {
        console.error('Error al mover el archivo:', error);
        res.status(500).json({'responseText':'Error al mover el archivo.'});
    }
});





// Ruta para recuperar imágenes
app.get('/image/:folder/:imageName', (req, res) => {
    const folder = req.params.folder;
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, 'uploads', folder, imageName);

    res.sendFile(imagePath);
});

app.get('/test', (req, res) => {
    // Obtiene la fecha y hora actual
    const currentDate = new Date();
    // Crea un objeto JSON con la fecha, hora y estado activo
    const responseJSON = {
      date: currentDate.toLocaleDateString(),
      time: currentDate.toLocaleTimeString(),
      status: "active"
    };
    // Envía el objeto JSON como respuesta
    res.json(responseJSON);
});

// Puerto en el que escucha el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

