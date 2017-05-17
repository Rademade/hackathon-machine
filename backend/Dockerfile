FROM debian:jessie-slim

COPY dist /

WORKDIR /

EXPOSE 1323

ENTRYPOINT bash -c "/migrate && /server"
