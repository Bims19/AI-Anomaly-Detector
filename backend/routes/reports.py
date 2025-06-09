# Scheduling, logs, and emailing (mocked).

# routes/reports.py
from flask import Blueprint, request, jsonify
from datetime import datetime

reports_bp = Blueprint('reports', __name__)

schedules = []
logs = []

@reports_bp.route('/schedule', methods=['POST'])
def schedule():
    data = request.get_json()
    data['created_at'] = datetime.utcnow().isoformat()
    schedules.append(data)
    logs.append(f"Scheduled report for {data['email']} at {data['interval']}")
    return jsonify({'status': 'ok', 'scheduled': data})

@reports_bp.route('/schedule', methods=['GET'])
def get_schedules():
    return jsonify(schedules)

@reports_bp.route('/logs', methods=['GET'])
def get_logs():
    return jsonify(logs)
