let fireCount = 0;
let start = new Date();
let timer = setInterval(() => {
	if (new Date - start > 1000) {
	  clearInterval(timer);
		console.log(fireCount);
		return;
	}
	fireCount++;
}, 0);
