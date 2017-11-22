FROM nginx

RUN mkdir /etc/nginx/sites-enabled

COPY nginx.conf /etc/nginx/nginx.conf
COPY sites-enabled/. /etc/nginx/sites-enabled/
