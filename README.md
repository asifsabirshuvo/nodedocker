

docker build -t node-docker-sample .
docker run -it -d -p 9000:3000 node-docker-sample
docker run -it -p 9001:3000 -v$(pwd):/app node-docker-sample

docker exec -it e452 bash


##handle the docker compose file . all these commands have to be on the docker-compose file directory

docker-compose up  
docker-compose up -d
docker-compose down


**DOCKER FILE (UNOPTIMIZED)**

FROM node:9-slim
WORKDIR /app 
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]% 


**DOCKER FILE (CACHED)**

FROM node:9-slim
WORKDIR /app 
COPY package.json package-lock.json /app/
RUN npm install
COPY . /app
CMD ["npm","start"]
