from flask import Flask#nos permite crear apps web mucho mas rapido de lo normal.
from flask_pymongo import PyMongo #driver para conexion
from funciones.crearUsers import create_user

#creacion de la api y conexion con la db
app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27027/store"
mongo = PyMongo(app)

@app.route('/v1/Admins', methods=['POST'])

def principal():
    #manejador de errores.
    try:
        create_user()
        return {
            'message': 'Todo correcto'
        }
    except Exception as e:
        return {
            'message': 'Ocurrió un error: ' + str(e)
        }

if __name__ == "__main__":
    app.run(host='localhost',port=9999,debug=True)