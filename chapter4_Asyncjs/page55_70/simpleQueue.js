const async = require('async');

const worker = (data, callback) => {
  console.log(data);
  callback()
}

let concurrency = 2
let queue = async.queue(worker, concurrency)
queue.push(1)
queue.push(2)
queue.push(3)
