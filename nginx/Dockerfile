FROM nginx:stable

ADD ./frontend/dist /static

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

CMD /bin/bash -c "nginx -g 'daemon off;'"
