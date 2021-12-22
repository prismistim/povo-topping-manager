FROM node:17-alpine3.14

WORKDIR /app

RUN apk update && \
  apk upgrade && \
  apk add --no-cache git 

RUN mkdir /app/node_modules && \
  chown -R node:node /app/node_modules

ENV CYPRESS_CACHE_FOLDER=/home/node/.cache/Cypress

COPY --chown=node:node package*.json /app/

RUN cd /app && \
  npm install -g npm && \
  npm install
