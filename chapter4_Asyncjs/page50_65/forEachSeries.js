const async = require("async");
const fs = require("fs");
process.chdir("chapter4_Asyncjs"); // change the working directory

let concatenation = "";
const dirContents = fs.readdirSync(".");
async.filter(dirContents, isFileName, (filenames) =>
	async.forEachSeries(filenames, readAndConcat, onComplete));

const isFileName = (filename, callback) => {
	fs.stat(filename, (err, stats) => {
		if(err) throw err;
    // Async.js collection methods ( filter , reject , detect , some , every , and their
    // series equivalents) can’t report errors.
		callback(stats.isFile());
	});
};

const readAndConcat = (filename, callback) => {
	fs.readFile(filename, "utf8", (err, fileText) => {
		if(err) return callback(err);
		concatenation += fileText;
		callback();
	});
};

const onComplete = (err) => {
	if(err) throw err;
	console.log(concatenation);
};
