# Tugas 2 Cloud - Docker Compose

**Nama:** [Muhammad Arsyad Syabani]  
**NPM:** [2410010132]

## 📦 Deskripsi

Aplikasi web sederhana menggunakan **Node.js + Express** yang dikemas dalam Docker Container dan dijalankan menggunakan **Docker Compose**.

## 🗂 Struktur Project

```
tugas-docker/
├── app/
│   ├── public/
│   │   └── index.html       # Frontend
│   ├── index.js             # Server utama
│   ├── package.json
│   ├── Dockerfile
│   └── .dockerignore
├── docker-compose.yml
└── README.md
```

## 🚀 Cara Menjalankan

### 1. Clone repository

```bash
git clone https://github.com/username/tugas2-cloud.git
cd tugas2-cloud
```

### 2. Jalankan dengan Docker Compose

```bash
docker compose up --build
```

### 3. Buka di browser

```
http://localhost:3000
```

## 🛑 Menghentikan Container

```bash
docker compose down
```

## 🔗 API Endpoints

| Method | Endpoint     | Deskripsi              |
|--------|--------------|------------------------|
| GET    | `/`          | Halaman utama (UI)     |
| GET    | `/api/hello` | Pesan dari container   |
| GET    | `/api/info`  | Info aplikasi & server |

## 🐳 Teknologi

- Node.js 18 (Alpine)
- Express.js 4
- Docker & Docker Compose
