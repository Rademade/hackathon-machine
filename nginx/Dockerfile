FROM nginx:stable

ADD ./frontend/dist /static

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
