var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req,res){
	res.sendFile(__dirname + '/index.html');
});
var kafka = require('kafka-node');

var KAFKA_BROKER = 'localhost:2181';
var KAFKA_CLIENT_ID = "socketio-kafka";
var kafkaClient = new kafka.Client(KAFKA_BROKER, KAFKA_CLIENT_ID);
var producer = new kafka.Producer(kafkaClient);
var consumer = new kafka.Consumer(kafkaClient, [], {autoCommit: true});
var topics = ['fortune-cookie'];

/* 
	Uses a producer to create the topics that the consumer expects. 
	This is a hack to avoid errors when a consumer adds a non-existant topic.
*/
function initializeTopics(topics) {
  producer.createTopics(topics, false, function (err, data) {
    if(err) {
      console.log(err);
    } else {
      console.log('Created topics.');
      console.log(data);
    }

    consumer.addTopics(topics, function (err, added) {
      if (err) {
        // If topics don't exist yet, an error is expected.
        console.log(err);
      } else {
        console.log(added);
      }
    });

  });
}

var fortuneCookie = require('./fortune-cookie');

function sendMessage() {
  var payloads = [
    { topic: 'fortune-cookie', messages: fortuneCookie.fortune(), partition: 0 }
    ];
  console.log('Sending...');
  producer.send(payloads, function(err, data){
    console.log('.');
  });
}

producer.on('error', function (err) {
  console.log("Producer", err);
});

producer.on('ready', function (message) {
  initializeTopics(topics);  
});

producer.on('ready', function (message) {setInterval(sendMessage, 1000)});

consumer.on('message', function (message) {
  console.log(message);
  io.emit('fortune-cookie', JSON.stringify(message));
});

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     io.emit('chat message', msg);
//   });
// });

http.listen(3000, function(){
  console.log('listening on *:3000');
});