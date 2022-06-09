#syntax=docker/dockerfile:1

FROM node:16-alpine AS development

WORKDIR /usr/src/531logger/client

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --legacy-peer-deps


COPY . .

CMD npm start

FROM development AS builder

RUN INLINE_RUNTIME_CHUNK=false IMAGE_INLINE_SIZE_LIMIT=0 npm run build

FROM nginx:mainline-alpine AS production

## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# Copy from the stage 1
COPY --from=builder /usr/src/531logger/client/build /usr/share/nginx/html

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf.template

CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

EXPOSE $PORT