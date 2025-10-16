# js-express-server

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
js-express-server
├── src
│   └── index.js          # Entry point of the application
├── package.json          # Configuration file for npm
├── yarn.lock             # Yarn lock file for dependency versions
├── Dockerfile            # Instructions to build the Docker image
├── .dockerignore         # Files to ignore when building the Docker image
├── .gitignore            # Files to ignore by Git
└── README.md             # Project documentation
```

## Getting Started

To set up the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd js-express-server
   ```

2. **Install dependencies:**
   ```
   yarn install
   ```

3. **Run the server:**
   ```
   yarn start
   ```

The server will start and listen on port 8001.

## Docker

To build and run the Docker container, use the following commands:

1. **Build the Docker image:**
   ```
   docker build -t js-express-server .
   ```

2. **Run the Docker container:**
   ```
   docker run -p 8001:8001 js-express-server
   ```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.