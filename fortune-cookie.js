var fortunes = [
	"No snowflake in an avalanche ever feels responsible.",
	"Ignore previous cookie.",
	"You will soon cross the big water.",
	"Catch fire with enthusiasm. People will walk for miles to watch you burn.",
	"A small fire is soon quenched.",
	"Love at first sight. It’s generally used for people, but you can also use it for other physical objects.",
	"All things are difficult before they are easy.",
	"Near to rivers, we recognize fish, near to mountains, we recognize the songs of birds.",
	 "Everything is ready except the east wind."
];

exports.fortune = function() {
	var item = fortunes[Math.floor(Math.random()*fortunes.length)];
	return item;
}