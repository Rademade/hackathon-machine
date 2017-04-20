FROM nginx:stable

ADD ./frontend/build /static

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

CMD /bin/bash -c "nginx -g 'daemon off;'"
