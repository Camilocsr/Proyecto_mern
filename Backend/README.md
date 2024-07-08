# Backnd del Proyecto MERN con AWS

Este proyecto utiliza AWS S3 para almacenar archivos de manera pública. Aquí encontrarás las instrucciones necesarias para configurar los permisos de tu bucket S3 y cómo integrarlo en tu aplicación.

## Configuración de AWS S3

### Paso 1: Crear un bucket en S3

1. Ve a la consola de AWS S3.
2. Haz clic en "Create bucket".
3. Ingresa un nombre para tu bucket (por ejemplo, `tu-nombre-de-bucket`).
4. Selecciona la región adecuada (por ejemplo, `sa-east-1` para São Paulo).
5. Haz clic en "Create bucket".

### Paso 2: Configurar permisos del bucket

Para permitir el manejo de archivos públicos en tu bucket S3, necesitas ajustar la política del bucket para permitir el acceso público de solo lectura a los objetos.

1. Ve a la consola de AWS S3.
2. Selecciona tu bucket (`tu-nombre-de-bucket`).
3. Ve a la pestaña "Permissions".
4. En la sección "Bucket policy", pega la siguiente política:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadGetObject",
                "Effect": "Allow",
                "Principal": "*",
                "Action": "s3:GetObject",
                "Resource": "arn:aws:s3:::tu-nombre-de-bucket/*"
            }
        ]
    }
    ```

5. Haz clic en "Save changes" para aplicar la política.

### Paso 3: Configuraciones generales.

1. Instalar las dependencias necesarias del proyecto:

    ```bash
    npm i
    ```

2. Crea un archivo de variables de entorno (.env)
    - Agrega las siguientes variables de entorno:
    ```bash
    APP_PORT=
    DB=
    APP_HOST=
    DB_NAME=
    DB_PORT=
    DB_HOST=

    AWS_ACCESS_KEY_ID=
    AWS_SECRET_ACCESS_KEY=
    AWS_REGION=
    AWS_NAME_BUKED_S3=
    ```


2. Crea las carpetas
    - Tienes que estar posicionados e la carpeta principal, en esa carpeta creas el directorio storage y dntro de ella creas el directorio imgs