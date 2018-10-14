const async = require("async");
let start = new Date;
async.series([
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
