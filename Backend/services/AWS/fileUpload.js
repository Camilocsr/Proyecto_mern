const { client } = require('./awsConfig.js');
const { AWS_BUCKET_NAME,AWS_REGION } = require('../../config.js');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const uploadFile = async (pathFile) => {
    try {
        await fsPromises.access(pathFile);

        const fileName = path.basename(pathFile);
        const stream = fs.createReadStream(pathFile);
        const { PutObjectCommand } = require('@aws-sdk/client-s3');

        const command = new PutObjectCommand({
            Bucket: AWS_BUCKET_NAME,
            Key: fileName,
            Body: stream
        });

        await client.send(command);
        await fsPromises.unlink(pathFile);

        const fileUrl = `https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${fileName}`;
        console.log(`URL del archivo en AWS S3: ${fileUrl}`);
        return fileUrl;
    } catch (error) {
        console.error(`Error al cargar el archivo ${pathFile}:`, error);
        throw error;
    }
};

module.exports = {
    uploadFile
};