# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.
- Directory layout:

  ```text
  .
  ├── docker-compose.yml
  └── node-server
      ├── Dockerfile
      ├── package.json
      ├── package-lock.json
      └── src
          └── index.js
  ```

- Migration notes (Python ➜ Node.js):
  - Service renamed from python-server to node-server.
  - FastAPI replaced with Express (Node.js).
  - API contract preserved:
    - GET /tasks returns the current task list as JSON.
    - POST /tasks accepts a JSON body and appends to the list.
  - Default port remains 8000 (override with PORT env var).
  - Dependencies moved from requirements.txt to package.json.
  - Docker base image now Node.js (for example node:18-alpine).

- Development (Node.js):
  - cd node-server
  - npm install
  - npm run dev to run with hot reload, or npm start to run normally.

- Docker:
  - docker compose up builds and starts the Node.js service.
  - The service is exposed on port 8000.
  ```text
  .
  ├── docker-compose.yml
  └── python-server
      ├── Dockerfile
      ├── requirements.txt
      └── src
          ├── __init__.py
          └── main.py
  ```

- `python-server/src/__init__.py`: This empty file marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.
