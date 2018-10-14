const fs = require("fs");
process.chdir("chapter4_Asyncjs"); // change the working directory
let concatenation = "";

fs.readdir(".", (err, filenames) => {
	if(err) throw err;

	const readFileAt = (index) => {
		let filename = filenames[index];
		fs.stat(filename, (err, stats) => {
			if(err) throw err;
			if(! stats.isFile()) {
				return readFileAt(index + 1);
			}

			fs.readFile(filename, "utf8", (err, text) => {
				if(err) throw err;
				concatenation += text;
				if(index + 1 === filenames.lenght){
					// all files read, display the output
					return console.log(concatenation);
				}
				readFileAt(index + 1);
			});
		});
	};
	readFileAt(0);
});
