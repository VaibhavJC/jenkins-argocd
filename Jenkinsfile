pipeline {
    agent any

    environment {
        AWS_REGION = "us-east-1"
        ECR_REGISTRY = "138008497993.dkr.ecr.us-east-1.amazonaws.com"
        ECR_REPO = "${ECR_REGISTRY}/main"
        IMAGE_NAME = "main"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/VaibhavJC/Hotstar-DevOps-Project-NodeJS.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:latest .'
            }
        }

        stage('Login to ECR') {
            steps {
                sh '''
                aws ecr get-login-password --region ${AWS_REGION} | \
                docker login --username AWS --password-stdin ${ECR_REGISTRY}
                '''
            }
        }

        stage('Push Image') {
            steps {
                sh '''
                docker tag ${IMAGE_NAME}:latest ${ECR_REPO}:latest
                docker push ${ECR_REPO}:latest
                '''
            }
        }
    }
}
