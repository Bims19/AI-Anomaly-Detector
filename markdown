# AI Revenue Admin System

ai-revenue-admin-system/
├── backend/
│ ├── app.py
│ ├── anomaly.py
│ ├── referral.py
│ └── ...
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ └── App.jsx
│ └── index.html
└── README.md


An AI-powered web platform to monitor and manage financial transactions for government agencies. It features anomaly detection, case referrals, scheduled reports, email delivery, and dashboards.

---

## 🚀 Features

- 🔐 JWT-based User Authentication
- 🤖 Machine Learning Anomaly Detection (Isolation Forest)
- 📂 Case Referral Engine
- 📊 Report Scheduling (Daily/Weekly)
- 📨 Email Report Delivery
- 🧠 AI Anomaly Engine with live detection
- 🧾 Admin Panel with Logs, Filters, CSV Export, Email Preview
- 🌐 Timezone & Interval Support

---

## 🛠️ Tech Stack

- **Frontend:** React + Tailwind CSS + Axios
- **Backend:** Python Flask + SQLite + Scikit-learn
- **ML Model:** Isolation Forest
- **Others:** JWT, CronJob, Flask-Mail, Pandas

---

## 📁 Folder Structure


---

## ⚙️ Setup Instructions

### ✅ Backend

1. `cd backend`
2. `python -m venv venv && source venv/bin/activate`
3. `pip install -r requirements.txt`
4. Create `.env` from `.env.example`
5. Run:
   ```bash
   flask run

Frontend
cd frontend

npm install

Create .env from .env.example

Run:

#bash

npm run dev


Default Credentials

Username: admin
Password: admin123


Example API Calls

POST /api/auth/login
POST /api/anomaly/detect
GET /api/reports/logs
POST /api/reports/schedule


Contact
Maintained by Revolve Engineering. For support, email: jackogundipe@gmail.com

#yami


---

### 📄 `/backend/.env.example`

```env
FLASK_ENV=development
SECRET_KEY=your-secret-key
MAIL_SERVER=smtp.example.com
MAIL_PORT=587
MAIL_USERNAME=your@email.com
MAIL_PASSWORD=yourpassword
MAIL_DEFAULT_SENDER=your@email.com

