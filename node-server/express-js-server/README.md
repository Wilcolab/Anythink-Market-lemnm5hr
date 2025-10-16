# Express JS Server

This project is a simple Express server that listens on port 8001. It is set up to use `nodemon` for automatic code reloading during development.

## Project Structure

```
express-js-server
├── src
│   ├── index.js          # Entry point of the application
│   ├── routes            # Directory for route definitions
│   │   └── index.js      # Currently empty, can be used for future routes
│   └── controllers       # Directory for controller logic
│       └── index.js      # Currently empty, can be used for future controller logic
├── package.json          # Project configuration and dependencies
├── yarn.lock             # Dependency version lock file
├── Dockerfile            # Instructions to build the Docker image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

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

To start the server with automatic reloading, use the following command:

```
yarn start
```

The server will be running on `http://localhost:8001`.

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

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.