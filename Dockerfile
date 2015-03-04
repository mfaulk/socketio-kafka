FROM phusion/baseimage

MAINTAINER Matt Faulkner <matt.faulkner@qadium.com>
MAINTAINER https://github.com/mfaulk/socketio-kafka.git

RUN apt-get update
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get install -y nodejs npm

RUN mkdir /app
ADD . /app/

WORKDIR /app
RUN npm install
EXPOSE 3000

CMD ["nodejs", "index.js"]