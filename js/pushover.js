var request = require("request");

// BitcoinVSAltsKey = // 5d0957056c647d0cb0263182

module.exports = class Pushover {
	send(msg) {
		let pushOverData = {
		    "token" : "a7hde8rxg36qoxqxufzsmxjsc8oioq",
		    "user" : "uk16sp73kebid2k172o3gz5fmffuik",
		    "message" : msg,
		    "sound" : "gamelan"
		}

		request.post(
		{
		    url:'https://api.pushover.net/1/messages.json',
		    method: "POST",
		    formData: pushOverData
		}, function optionalCallback(err, httpResponse, body) {
		    if (err) {
		        return console.error('push failed:', err);
		    }		   
		});
	}
}

/*
pushover.send("📗" + pair + " - " + curr_price + " | " + stratname)

pushover.send("📕" + pair + " - " + curr_price + " | " + stratname)
*/