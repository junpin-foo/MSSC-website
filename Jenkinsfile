pipeline {
    agent any
    
    environment {
        DEV_PORT = '3000'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Build') {
            steps {
                sh './dev-docker-manage.sh build'
            }
        }
        
        stage('Deploy') {
            steps {
                sh './dev-docker-manage.sh start'
            }
        }
        
        stage('Post-Deploy') {
            steps {
                echo "Dev deployment complete. Access the application at http://\${env.SERVER_IP}:\${DEV_PORT}"
            }
        }
    }
    
    post {
        failure {
            sh './dev-docker-manage.sh dev stop'
        }
    }
}