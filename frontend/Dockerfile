FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./frontSortingScript.js  .
COPY ./index.html  .
COPY ./ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]

