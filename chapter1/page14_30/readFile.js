const util = require('util');
const fs = require('fs');
const fileReader = util.promisify(fs.readFile);
const fileName = __dirname + '/package.json';

const fr = async () => {
  const res = await fileReader(fileName);
  if(!fileName) {
    console.error(error);
  }
  console.log(res.toString());
}

fr();
