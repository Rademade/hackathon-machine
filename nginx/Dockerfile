FROM nginx:stable

ADD ./frontend/build /static

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
