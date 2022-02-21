VERSION 0.6
FROM node:15.12.0-alpine3.13
WORKDIR /smalltownkitten

deps:
    COPY package.json package-lock.json
    RUN npm install
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

build:
    FROM +deps
    COPY assets site/assets
    COPY config site/config
    COPY layouts site/layouts
    COPY static site/static
    RUN npm run sass -- site/assets/scss/global.scss site/assets/site.css
    SAVE ARTIFACT site /site
