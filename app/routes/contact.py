from flask import Blueprint, request, jsonify
from datetime import datetime

bp = Blueprint("contact", __name__)

@bp.route("/", methods=["POST"])
def contact():
    data = request.get_json()
    if not data or not data.get("name") or not data.get("email") or not data.get("message"):
        return jsonify({"error": "Missing required fields"}), 400

    print(f"[CONTACT] {datetime.utcnow().isoformat()} — {data['name']} <{data['email']}>: {data.get('subject', 'N/A')}")
    print(f"[CONTACT] Message: {data['message']}")
    return jsonify({"message": "Message received. We'll get back to you soon."}), 200
