const async = require("async");
let start = new Date;
// Whereas async.series took the sum of the timeouts to complete (~600ms),
// async.parallel takes only the max timeout (~300ms).
async.parallel([
	function (callback) {
		setTimeout(callback, 100); },
    function (callback) {
  		setTimeout(callback, 300); },
      function (callback) {
    		setTimeout(callback, 200); }
], (err, results) => {
	// show time elapsed since start
	console.log("Completed in " + (new Date - start) + " ms");
});
