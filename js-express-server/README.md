# js-express-server

Simple Express server that listens on port 8001. Use `yarn start` to run with `nodemon`.

Run locally:

```bash
command -v yarn >/dev/null 2>&1 || npm install -g yarn
cd js-express-server
yarn install
yarn start
```

Endpoints:
- GET / -> "Hello World"
- GET /tasks -> { tasks: [...] }
- POST /tasks -> { "text": "..." }
# js-express-server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
js-express-server
├── src
│   └── index.js          # Entry point of the application
├── package.json          # npm configuration file
├── nodemon.json          # Nodemon configuration file
├── Dockerfile            # Dockerfile for building the server image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you want to run the server in a Docker container).

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Server

To run the server with Nodemon, use the following command:
```
npm start
```

The server will be accessible at `http://localhost:8001`.

### Running with Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t js-express-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 js-express-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.