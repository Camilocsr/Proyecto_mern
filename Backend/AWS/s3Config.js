const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');
const fsPromises = require('fs').promises;
const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_BUCKET_NAME } = require('../config.js');

const client = new S3Client({
    region: AWS_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
    }
});

const uploadFile = async (pathFile) => {
    try {
        try {
            await fsPromises.access(pathFile);
        } catch (error) {
            throw new Error(`El archivo ${pathFile} no existe.`);
        }
        const stream = fs.createReadStream(pathFile);
        const command = new PutObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: pathFile,
            Body: stream
        });
        const data = await client.send(command);
        await fsPromises.unlink(pathFile);
        return data;
    } catch (error) {
        console.error(`Error al cargar el archivo ${pathFile}:`, error);
        throw error;
    }
};

module.exports = {
    uploadFile
};