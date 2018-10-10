let myDomain = require("domain").create();
myDomain.run(() => {
	setTimeout(function() {
		throw new Error("Listen to me!");
	}, 50);
});
myDomain.on("error", function(error){
	console.log("Error ignored");
});
