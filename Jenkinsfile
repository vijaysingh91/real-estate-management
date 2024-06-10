pipeline{
    agent any
    
    stages{
        stage("logging in into ecr"){
            steps{
                
                  sh "aws ecr get-login-password --region ap-south-1 | sudo -S docker login --username AWS --password-stdin 682484440485.dkr.ecr.ap-south-1.amazonaws.com"
                
            }
        }
        stage("build the image"){
            steps{
            sh "docker build -t frontendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest ./frontend"
            sh "docker build -t backendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest ./backend-fastify"
                
            }
            
        }
        stage("pusing to ecr"){
            steps{
            sh "docker push frontendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest"
            sh "docker push backendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest"
                
            }
            
        }
        stage("creating acontainer"){
            steps{
            sh "docker run -d -p 4200:4200 frontendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest"
            sh "docker run -d -p 8000:8000 backendmyecr:latest 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:latest"
                
            }
        }
    }
        
    }
