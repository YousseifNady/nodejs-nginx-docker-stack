# 🚀 Node.js Nginx Docker Stack

![Docker](https://img.shields.io/badge/Docker-Enabled-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![Nginx](https://img.shields.io/badge/Nginx-Reverse_Proxy-brightgreen?logo=nginx)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-blue?logo=postgresql)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-brightgreen?logo=mongodb)
![Redis](https://img.shields.io/badge/Redis-Cache-red?logo=redis)

A production-ready backend infrastructure built with **Node.js, Express, Nginx, MongoDB, PostgreSQL, and Redis** using Docker Compose.  
This project demonstrates a scalable **microservices-style backend architecture** with containerized services and reverse proxy routing.

---

## ⚡ Features

- 🚀 Node.js (Express API)
- 🌐 Nginx Reverse Proxy
- 🍃 MongoDB (NoSQL database)
- 🐘 PostgreSQL (Relational database)
- ⚡ Redis (Caching / sessions)
- 🧰 Mongo Express (MongoDB admin UI)
- 🧰 Adminer (PostgreSQL admin UI)
- 🐳 Docker Compose orchestration
- 💾 Persistent volumes for data storage
- ❤️ Health checks for services
- 🔐 Environment-based configuration

---

## 🏗️ Architecture

```text
Client
  ↓
Nginx (Reverse Proxy)
  ↓
Node.js (Express API)
  ↓
┌──────────────┬──────────────┬──────────────┐
│  MongoDB     │ PostgreSQL   │    Redis     │
│  NoSQL       │ Relational   │   Cache      │
└──────────────┴──────────────┴──────────────┘
```

---

## 🔁 Request Flow

1. Client sends request → Nginx
2. Nginx routes request → Node.js API
3. Node.js handles business logic
4. Data layer:
   - MongoDB (documents)
   - PostgreSQL (relations)
   - Redis (cache)

---

## ⚙️ Setup Instructions

### 1. Clone Repository

```bash
git clone https://github.com/YousseifNady/nodejs-express-nginx-docker.git
cd nodejs-express-nginx-docker
```

### 2. Environment Variables

Create a `.env` file:

```env
PORT=3000

# MongoDB
DB_HOST=mongo
DB_PORT=27017
DB_USER=root
DB_PASSWORD=password

# PostgreSQL
DB_PG_HOST=postgres
DB_PG_PORT=5432
DB_PG_USER=root
DB_PG_PASSWORD=password
POSTGRES_DB=my-app

# Redis
REDIS_HOST=redis
REDIS_PORT=6379
```

### 3. Run with Docker

```bash
docker compose -f docker-compose-dev.yml up --build
```

---

## 🌍 Service Endpoints

| Service       | URL                        |
|---------------|----------------------------|
| 🚀 API        | http://localhost:3000       |
| 🌐 Nginx      | http://localhost:80         |
| 🍃 Mongo UI   | http://localhost:8081       |
| 🐘 Adminer    | http://localhost:9090       |

---

## 🧪 Important Notes

- `depends_on` does **NOT** guarantee service readiness
- Use retry logic in Node.js DB connections
- Always validate `.env` configuration
- Use Docker volumes for persistent data

---

## 🐳 Docker Concepts Used

- Multi-container orchestration
- Service isolation via Docker network
- Named volumes for persistence
- Health checks for reliability
- Reverse proxy pattern

---

## 🛠 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web framework
- **Nginx** — Reverse proxy
- **MongoDB** — NoSQL database
- **PostgreSQL** — Relational database
- **Redis** — In-memory cache
- **Docker & Docker Compose** — Containerization & orchestration

---

## 🚀 Future Improvements

- [ ] GitHub Actions CI/CD pipeline
- [ ] Swagger API documentation
- [ ] JWT authentication system
- [ ] Centralized logging (Winston / ELK)
- [ ] Production-ready compose file separation
- [ ] Monitoring (Prometheus + Grafana)

---

## 📄 License

MIT License
