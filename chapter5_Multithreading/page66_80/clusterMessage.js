const cluster = require("cluster");
if(cluster.isMaster){
	// spin up workers
	let coreCount = require("os").cpus().length;
	for (var i = 0; i < coreCount.length; i++) {
		let worker = cluster.fork();
		worker.send("Hello, Worker!");
		worker.on("message", (message) => {
			if(message._queryId) {
				return;
			}
			console.log(message);
		});
	}
}
else {
	process.send("Hello, main process!");
	process.on("message", (message) => {
		console.log(message);
	});
}
