# This is your main Flask application entry point.

# app.py
from flask import Flask
from flask_cors import CORS
from routes.auth import auth_bp
from routes.reports import reports_bp
from routes.anomaly import anomaly_bp

app = Flask(__name__)
app.config['SECRET_KEY'] = 'supersecret'
CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(reports_bp, url_prefix='/api/reports')
app.register_blueprint(anomaly_bp, url_prefix='/api/anomaly')

@app.route('/')
def index():
    return {'message': 'API running'}

if __name__ == '__main__':
    app.run(debug=True)
