# 🛒 E-Commerce Three-Tier Microservices Application

A production-style **E-commerce application architecture** built using **Docker and Docker Compose**, following **Three-Tier Architecture** and **Microservices principles**.  
This repository demonstrates how modern applications are designed, containerized, and orchestrated in real-world DevOps environments.

---

## 📌 Project Objective

The goal of this project is to demonstrate:
- Three-Tier Architecture implementation
- Microservices-based backend design
- Docker containerization best practices
- Service isolation and scalability
- Clean, professional repository structure suitable for interviews and production systems

---

## 🧠 Architecture Overview

### Three-Tier Architecture
1. **Presentation Layer (Frontend)**  
   Handles user interaction and UI.

2. **Application Layer (Backend Microservices)**  
   Business logic split into independent services.

3. **Data Layer (Database)**  
   Persistent storage for application data.

### Microservices Breakdown
- **User Service** – Manages user-related operations
- **Product Service** – Manages product catalog
- **Order Service** – Handles order processing

Each service:
- Runs in its own Docker container
- Is independently deployable
- Communicates over Docker’s internal network

---

## 🏗️ Project Structure





---

## 🖥️ Frontend Service (Presentation Layer)

### Purpose
The frontend represents the **user interface** of the E-commerce application.  
In a real-world setup, this would be a React or Angular application.  
For this project, the focus is on **containerization and architecture**, not UI complexity.

### Key Characteristics
- Runs in its own container
- Exposes port `3000`
- Communicates with backend services via APIs

---

## 🧩 Backend Microservices (Application Layer)

### 1️⃣ User Service
**Responsibility:**  
Handles user-related operations such as registration, authentication, and profiles.

- Technology: Node.js + Express
- Port: `4001`
- Independently deployable and scalable

---

### 2️⃣ Product Service
**Responsibility:**  
Manages product catalog data such as product name and pricing.

- Technology: Node.js + Express
- Port: `4002`
- Optimized for read-heavy operations

---

### 3️⃣ Order Service
**Responsibility:**  
Handles order creation and order-related business logic.

- Technology: Node.js + Express
- Port: `4003`
- Can be extended to include payments and transactions

---

## 🗄️ Database Layer

### Purpose
Provides persistent storage for the E-commerce system.

### Design Principle
Each microservice **owns its data**, which is a core microservices principle.  
SQL initialization files are provided for:
- Users
- Products
- Orders

Database Engine:
- PostgreSQL (Official Docker Image)

---

## 🐳 Docker & Containerization

### Dockerfiles
Each service includes its own `Dockerfile`, ensuring:
- Service isolation
- Reproducible builds
- Lightweight images using Alpine base images

### Docker Compose
Docker Compose is used to:
- Build images
- Start all services together
- Create a shared internal network
- Manage service dependencies

---

## 🧠 docker-compose.yml Responsibilities

- Orchestrates all containers
- Defines inter-service communication
- Maps container ports to host ports
- Ensures correct startup order using `depends_on`

---

## 🧹 .gitignore
### Why?
- Prevents unnecessary files from being committed
- Protects sensitive configuration and secrets
- Keeps repository clean and professional

---

## ▶️ How to Run the Application

### Prerequisites
- Docker
- Docker Compose
- Git

### Run Command
```bash
docker-compose up --build
