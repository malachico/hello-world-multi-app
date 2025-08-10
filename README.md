# Hello World Multi-App

This repository contains two simple "Hello World" applications:

1.  **Python Flask Application**: A backend API that returns "Hello from Python Flask!".
2.  **Node.js Express Application**: A full-stack application with a simple HTML/CSS/JS frontend that interacts with its own backend.

## Structure

-   `python-flask/`: Contains the Python Flask application (`app.py`, `requirements.txt`, `Dockerfile`).
-   `node-express/`: Contains the Node.js Express application (`server.js`, `package.json`, `public/`, `Dockerfile`).
    -   `node-express/public/`: Contains static files for the Node.js frontend (`index.html`, `style.css`, `script.js`).
-   `README.md`: This file.

## How to Run

### Python Flask Application

1.  Navigate to the `python-flask` directory:
    ```bash
    cd python-flask
    ```
2.  Build the Docker image:
    ```bash
    docker build -t hello-flask .
    ```
3.  Run the Docker container:
    ```bash
    docker run -p 5000:5000 hello-flask
    ```
4.  Access the application in your browser: `http://localhost:5000/`

### Node.js Express Application

1.  Navigate to the `node-express` directory:
    ```bash
    cd node-express
    ```
2.  Build the Docker image:
    ```bash
    docker build -t hello-express .
    ```
3.  Run the Docker container:
    ```bash
    docker run -p 3000:3000 hello-express
    ```
4.  Access the application in your browser: `http://localhost:3000/` and click the button to fetch the backend message.
