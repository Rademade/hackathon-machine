FROM nginx:stable

ADD ./frontend/build /static

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD /bin/bash -c "nginx -g 'daemon off;'"
