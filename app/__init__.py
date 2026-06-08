from flask import Flask
from app.extensions import db, migrate, bcrypt, jwt, cors
from app.config import Config
from app.models import *

def create_app():
    app = Flask(__name__)

    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    jwt.init_app(app)
    cors.init_app(app, resources={r"/api/*": {"origins": "*"}})

    from app.routes import register_blueprint
    register_blueprint(app)

    return app
