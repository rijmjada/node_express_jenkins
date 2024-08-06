pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Clonar el repositorio
                sudo git 'https://github.com/rijmjada/node_express_jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Instalar dependencias de npm
                sudo sh 'npm install'
            }
        }
}
