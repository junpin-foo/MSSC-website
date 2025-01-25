#!/bin/bash

# Function to build the Docker image
build() {
    echo "Building Docker image for development..."
    docker-compose build
}

# Function to start the container
start() {
    echo "Starting container for development..."
    docker-compose up -d
}

# Function to stop the container
stop() {
    echo "Stopping container..."
    docker-compose down
}

# Function to view logs
logs() {
    echo "Viewing logs..."
    docker-compose logs -f
}

# Function to clean up
clean() {
    echo "Cleaning up..."
    docker system prune -f
}

# Main script logic
case "$1" in
    build)
        build
        ;;
    start)
        start
        ;;
    stop)
        stop
        ;;
    logs)
        logs
        ;;
    clean)
        clean
        ;;
    restart)
        stop
        start
        ;;
    *)
        echo "Usage: $0 {build|start|stop|logs|clean|restart}"
        exit 1
esac

exit 0