# socketio-kafka
Uses Socket.io to push Kafka messages to clients. Based on the [socket.io chat demo](http://socket.io/get-started/chat/).

## Requirements
- Kafka. The [Apache Kafka Quick Start](http://socket.io/get-started/chat/) provides instructions on setting up a simple ZooKeeper server and Kafka broker.
- [Node](http://nodejs.org) and npm

## Running
Start Kafka, e.g. open two shells and start zookeeper, then kafka:
```
kafka_2.10-0.8.2.0$ bin/zookeeper-server-start.sh config/zookeeper.properties
```

```
kafka_2.10-0.8.2.0$ bin/kafka-server-start.sh config/server.properties
```

Within this project's directory, install the Node dependencies and run the app:
```
npm install
node index.js
```
Discover your fortune at `localhost:3000`.