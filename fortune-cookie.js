var fortunes = [
	"No snowflake in an avalanche ever feels responsible.",
	"Ignore previous cookie.",
	"You will soon cross the big water.",
	"Catch fire with enthusiasm. People will walk for miles to watch you burn.",
	"A small fire is soon quenched.",
	"Love at first sight. It’s generally used for people, but you can also use it for other physical objects.",
	"All things are difficult before they are easy.",
	"Near to rivers, we recognize fish, near to mountains, we recognize the songs of birds.",
	"Everything is ready except the east wind.",
	"As a computer, I find your faith in technology amusing!",
	"All men are created equal. All women are created superior.",
	"All men are created equal, but some must be sent to Siberia.",
	"A gift of flower will soon be made to you.",
	"A visit to a fresh place will bring strange work.",
	"Flee at once, all is discovered.", 
	"Retribution will be yours.", 
	"Take time in life to smell the rabbits, eat the flowers, and pet the cactus.",
	"When the going gets weird, the weird turn pro.",
	"If Sunday is the Lord's day, then Saturday belongs to the Devil.",
	"There is no such thing as paranoia. Your worst fears can come true at any moment."
];

exports.fortune = function() {
	var item = fortunes[Math.floor(Math.random()*fortunes.length)];
	return item;
}