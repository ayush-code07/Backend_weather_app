# Backend Weather App

A professional Node.js backend that provides real-time weather data with a high-performance **Redis caching layer**. This application follows the **MVC (Model-View-Controller)** pattern for clean, scalable, and maintainable code.

## 🚀 Features

*   **Efficient Caching:** Integrated with Redis to store API responses for 5 minutes, significantly reducing latency and external API costs.
*   **MVC Architecture:** Separation of concerns using distinct folders for Models, Views, Controllers, and Routes.
*   **Security & Stability:**
    *   **Rate Limiting:** Prevents API abuse using `express-rate-limit`.
    *   **Environment Safety:** Secure handling of API keys via `dotenv`.
*   **Dynamic Data Source:** Identifies whether data is being served from the **Redis Cache** or the **Visual Crossing API**.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database (Cache):** Redis (`ioredis`)
*   **HTTP Client:** Axios
*   **API Provider:** Visual Crossing Weather API

## 📂 Project Structure

```text
├── config/             # Redis client configuration
├── controllers/        # Request handling and logic flow
├── models/             # Data fetching (API) and Caching logic
├── routes/             # API endpoint definitions
├── views/              # Standardized JSON response formatting
├── app.js              # Server entry point and middleware
└── .env                # Environment variables (Internal use)# Backend Weather App
```

A professional Node.js backend that provides real-time weather data with a high-performance **Redis caching layer**. This application follows the **MVC (Model-View-Controller)** pattern for clean, scalable, and maintainable code.

## 🚀 Features

*   **Efficient Caching:** Integrated with Redis to store API responses for 5 minutes, significantly reducing latency and external API costs.
*   **MVC Architecture:** Separation of concerns using distinct folders for Models, Views, Controllers, and Routes.
*   **Security & Stability:**
    *   **Rate Limiting:** Prevents API abuse using `express-rate-limit`.
    *   **Environment Safety:** Secure handling of API keys via `dotenv`.
*   **Dynamic Data Source:** Identifies whether data is being served from the **Redis Cache** or the **Visual Crossing API**.

## 🛠️ Tech Stack

*   **Runtime:** Node.js
*   **Framework:** Express.js
*   **Database (Cache):** Redis (`ioredis`)
*   **HTTP Client:** Axios
*   **API Provider:** Visual Crossing Weather API

## 📂 Project Structure

```text
├── config/             # Redis client configuration
├── controllers/        # Request handling and logic flow
├── models/             # Data fetching (API) and Caching logic
├── routes/             # API endpoint definitions
├── views/              # Standardized JSON response formatting
├── app.js              # Server entry point and middleware
└── .env                # Environment variables (Internal use)
```

Project idea taken from: https://roadmap.sh/projects/weather-api-wrapper-service
