# MILA — World's Living Cultures

A full-stack web application for exploring world cultures through art, food, history, and traditions.

---

## Project Structure

```
MILA-project/
├── app/                  # Flask backend
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── services/         # External API services
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── styles/       # CSS files
│   │   └── data/         # Static data
│   └── vite.config.js
├── migrations/           # Database migrations
├── main.py               # Flask entry point
└── requirements.txt
```

---

## Team

| Person | Role | Responsibility |
|--------|------|----------------|
| Person 1 | Frontend UI/Design | Layouts, components, styling |
| Person 2 | Frontend Logic | State, API calls, auth |
| Person 3 | Backend/API | Flask API, external APIs |
| Person 4 | QA + Integration | Testing, bug fixes, deployment |

---

## Backend Setup

### 1. Clone the repo
```bash
git clone https://github.com/ifilsan266-afk/MILA-project.git
cd MILA-project
```

### 2. Create virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install psycopg2-binary
```

### 3. Create `.env` file in root folder
```
SECRET_KEY=any_random_string_here
JWT_SECRET_KEY=another_random_string_here
DATABASE_URL=postgresql://mila_user:mila_pass@localhost:5432/mila_db
```

### 4. Set up PostgreSQL
```bash
sudo apt install postgresql -y
sudo service postgresql start
sudo -u postgres psql
```
Inside psql:
```sql
CREATE DATABASE mila_db;
CREATE USER mila_user WITH PASSWORD 'mila_pass';
GRANT ALL PRIVILEGES ON DATABASE mila_db TO mila_user;
GRANT ALL ON SCHEMA public TO mila_user;
ALTER DATABASE mila_db OWNER TO mila_user;
\q
```

### 5. Run migrations
```bash
flask db upgrade
```

### 6. Start the backend
```bash
python3 main.py
```
Backend runs at `http://localhost:5000`

---

## Frontend Setup

```bash
cd MILA-project/frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

> Make sure the backend is running first so API calls work!

---

## API Endpoints

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/signup` | No | Register user |
| POST | `/api/auth/login` | No | Login, returns JWT |
| GET | `/api/cultures/` | No | List all cultures |
| GET | `/api/cultures/<id>` | No | Get culture detail |
| GET | `/api/quiz/` | No | Get quiz questions |
| POST | `/api/quiz/submit` | No | Submit answer |
| GET | `/api/user/profile` | Yes | Get user profile |
| GET | `/api/user/progress` | Yes | Get learning progress |
| POST | `/api/user/progress` | Yes | Update progress |
| GET | `/api/user/favorites` | Yes | Get favourites |
| POST | `/api/user/favorites` | Yes | Add favourite |
| DELETE | `/api/user/favorites` | Yes | Remove favourite |

---

## External APIs Used

- **TheMealDB** — cuisine data by country
- **REST Countries** — country info (population, languages, currency)
- **Art Institute of Chicago** — art by country
- **Wikipedia REST API** — history summaries
