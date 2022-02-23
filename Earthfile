VERSION 0.6
FROM node:15.12.0-alpine3.13
WORKDIR /smalltownkitten

deps:
    COPY package.json .
    COPY package-lock.json .
    RUN npm install
    SAVE ARTIFACT package-lock.json AS LOCAL ./package-lock.json

build:
    FROM +deps
    COPY assets site/assets
    COPY config site/config
    COPY layouts site/layouts
    COPY static site/static
    RUN npm run sass -- \
        site/assets/scss/global.scss:site/assets/site.css \
        site/assets/scss/footer.scss:site/assets/footer.css \
        site/assets/scss/postend.scss:site/assets/postend.css \
        site/assets/scss/subscribe.scss:site/assets/subscribe.css \
        site/assets/scss/index.scss:site/assets/index.css \
        site/assets/scss/postindex.scss:site/assets/postindex.css \
        site/assets/scss/tagcloud.scss:site/assets/tagcloud.css

    SAVE ARTIFACT site /site

gen:
    FROM klakegg/hugo:0.83.1-ci
    ARG hugoEnv="production"
    COPY +build/site site
    COPY content site/content
    COPY data site/data
    RUN cd site && hugo --environment="$hugoEnv" --minify
    SAVE ARTIFACT site/public /public AS LOCAL ./public
