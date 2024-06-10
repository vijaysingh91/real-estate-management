pipeline{
    agent any
    
    stages{
        stage("logging in into ecr"){
            steps{
                
                  sh "aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 682484440485.dkr.ecr.ap-south-1.amazonaws.com"
                
            }
        }
        stage("build the image"){
            steps{
            sh "docker build -t 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:front ./frontend"
            sh "docker build -t 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:back ./backend-fastify"
                
            }
            
        }
        stage("pusing to ecr"){
            steps{
            sh "docker push 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:front"
            sh "docker push 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:back"
                
            }
            
        }
        stage("creating acontainer"){
            steps{
            sh "docker run -d -p 4200:4200 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:front"
            sh "docker run -d -p 8000:8000 682484440485.dkr.ecr.ap-south-1.amazonaws.com/myecr:back"
                
            }
        }
    }
        
    }
