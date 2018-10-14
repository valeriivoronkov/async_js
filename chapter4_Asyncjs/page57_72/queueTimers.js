const async = require("async");

const worker = (data, callback) => {
	setTimeout(callback, data);
};

let concurrency = 2;
let queue = async.queue(worker, concurrency);
let start = new Date;
queue.drain = () => {
	console.log("Completed in " + (new Date - start) + " ms");
};

queue.push([100, 300, 200]);
