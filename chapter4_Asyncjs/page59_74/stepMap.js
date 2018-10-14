const Step = require("step");

const stepMap = (arr, iterator, callback) => {
	Step(() => {
		let group = this.group();
		for (var i = 0; i < array.length; i++) {
			iterator(array[i], group());
		}
	}, callback);
};
