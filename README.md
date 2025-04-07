# News_Web_App
# 📰 News App

A responsive News Application that allows users to register, login, search for news articles, read them in HTML format, and save favorites. Built with a **Microservices Architecture**, secured using **JWT**, and deployed on **AWS** using Docker and CI/CD pipelines.

---

## 📌 Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Microservices Overview](#microservices-overview)
- [Getting Started](#getting-started)
- [CI/CD & Deployment](#cicd--deployment)
- [Screenshots](#screenshots)
- [License](#license)

---

## ✅ Features

- 🔐 User Registration & Login (JWT secured)
- 🔎 Search news articles using [NewsCatcher API](https://newscatcherapi.com/)
- 📄 View news articles in HTML format
- ❤️ Save articles to favorites/wishlist
- 📱 Responsive UI (Angular/React)
- ☁️ Deployed on AWS EC2
- 🔄 Fully dockerized with Docker Compose
- 🔍 Swagger API documentation
- ✔️ Unit & Integration Testing

---

##  🧰 Tech Stack
Layer	Technology
Frontend React
Backend	Spring Boot (Microservices)
Database	MySQL (Cloud SQL)
Messaging	RabbitMQ / Kafka
API Gateway	Spring Cloud Gateway
Discovery Service	Eureka
Config Server	Spring Cloud Config
Auth	JWT
CI/CD	GitLab CI / AWS / Jenkins
Containerization	Docker, Docker Compose
Testing	JUnit (Backend), Jest/Jasmine (Frontend)
Code Quality	SonarLint, JaCoCo
Documentation	Swagger / OpenAPI

🧩 Microservices Overview
User Profile Service
Stores user registration details and publishes credentials to the message bus.

Authentication Service
Consumes credentials, handles login, and generates JWT tokens.

News Service
Integrates with NewsCatcher API to fetch articles.

Wishlist Service
Manages user-bookmarked articles.

API Gateway
Entry point for all requests. Routes & validates JWT tokens.

Eureka Server
Service registry for all microservices.

Config Server
Centralized external configuration management.

🚀 Getting Started
Prerequisites
Docker & Docker Compose
Node.js & Angular CLI or React
Java 17+
Maven 3.8+
MySQL DB (or Cloud SQL instance)

Run Locally

# Clone the repository
git clone https://github.com/maari621/News_Web_App
cd news-app

# Build all services
mvn clean install

# Run using Docker Compose
docker-compose up --build

Frontend (React)
cd news-frontend
npm install
npm run dev

🛠️ CI/CD & Deployment
CI configured using GitLab Pipelines / Jenkins
Docker images pushed to AWS ECR

📸 Screenshots
Add UI mockups, login screen, article search, and wishlist views here.

🙌 Acknowledgements
NewsCatcher API
Spring Boot
React
---

Let me know if you want a markdown version with embedded images, GitHub Actions instead of GitLab CI, or anything specific to your team/project!
## 🏗️ Architecture

The application follows Microservices architecture with the following services:

```plaintext
                        +------------------+
                        |  Config Server   |
                        +--------+---------+
                                 |
                        +--------v---------+
                        |   Eureka Server  |
                        +--------+---------+
                                 |
      +-------------------------+-----------------------------+
      |                         |                             |
+-----v------+       +----------v-----------+        +--------v--------+
|  API Gateway | <--> | Authentication Svc  | <-->   |  User Profile Svc |
+-------------+       +---------------------+        +------------------+
       |                         |                             |
       v                         v                             v
+---------------+     +---------------------+        +-------------------+
|  News Svc     | <--> | Wishlist Svc        | <-->   |   MySQL DB (Cloud) |
+---------------+     +---------------------+        +-------------------+
       |
+---------------+
| News API (3rd Party)
+---------------+
---

![image](https://github.com/user-attachments/assets/c97f54ff-99e4-4ecd-a4ef-e801ab22edd4)

