from flask import Flask, request#nos permite crear apps web mucho mas rapido de lo normal.
from flask_pymongo import PyMongo #driver para conexion
import bcrypt #biblioteca de incriptacion.
# from src.app.py import mongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27027/store"
mongo = PyMongo(app)


def create_user():
    nameAdmin = request.json.get('nameAdmin')
    paswordAdmin = request.json.get('paswordAdmin')

    if nameAdmin and paswordAdmin:
        # Encriptar la contraseña
        hashed_password = bcrypt.hashpw(paswordAdmin.encode('utf-8'), bcrypt.gensalt(rounds=10))
        hashed_password = hashed_password.decode('utf-8')

        mongo.db.admins.insert_one(
            {
                'nameAdmin': nameAdmin,
                'paswordAdmin': hashed_password
            }
        )
        return {'message': 'Recibido'}
    else:
        return {'message': 'Datos faltantes'}