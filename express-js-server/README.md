# Express JS Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart on code changes using Nodemon.

## Project Structure

```
express-js-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # NPM configuration file
├── nodemon.json        # Nodemon configuration file
├── Dockerfile          # Dockerfile for building the server image
├── .dockerignore       # Files to ignore when building the Docker image
├── .gitignore          # Files to ignore in Git
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you want to run the server in a container).

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd express-js-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To start the server with automatic restarts on code changes, use:

```
npm run dev
```

### Running with Docker

To build and run the server using Docker, execute the following commands:

1. Build the Docker image:

   ```
   docker build -t express-js-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 express-js-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.