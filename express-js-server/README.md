# Express JS Server

This is a simple Express server project that listens on port 8001. It is set up to use nodemon for automatic code updates during development.

## Project Structure

```
express-js-server
├── src
│   ├── index.js          # Entry point of the application
│   └── routes
│       └── index.js      # Route definitions
├── package.json           # Project configuration and dependencies
├── .dockerignore          # Files to ignore when building the Docker image
├── Dockerfile             # Instructions to build the Docker image
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

Make sure you have Node.js and Yarn installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd express-js-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic code updates, use the following command:

```
yarn start
```

The server will be running at `http://localhost:8001`.

### Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:
   ```
   docker build -t express-js-server .
   ```

2. Run the Docker container:
   ```
   docker run -p 8001:8001 express-js-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.