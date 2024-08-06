pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio
                git 'https://github.com/rijmjada/node_express_jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Instalar dependencias de npm
                sh 'npm install'
            }
        }
}
