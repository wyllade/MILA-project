from flask import Flask, send_from_directory
from app.extensions import db, migrate, bcrypt, jwt, cors
from app.config import Config
from app.models import *
import os

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

    static_dir = os.path.join(app.root_path, 'static')

    @app.route('/')
    def serve_index():
        return send_from_directory(static_dir, 'index.html')

    @app.route('/<path:path>')
    def serve_frontend(path):
        if path.startswith('api/'):
            return {"error": "Not found"}, 404
        file_path = os.path.join(static_dir, path)
        if os.path.isfile(file_path):
            return send_from_directory(static_dir, path)
        return send_from_directory(static_dir, 'index.html')

    return app
