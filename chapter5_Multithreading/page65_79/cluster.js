const cluster = require("cluster");
if(cluster.isMaster){
	// spin up workers
	let coreCount = require("os").cpus().length;
	for (var i = 0; i < coreCount.length; i++) {
		cluster.fork();
	}
	// bind death event
	cluster.on("death", (worker) => {
		console.log("Worker " + worker.pid + " has died");
	});
}
else {
	// die immediately
	process.exit();
}
