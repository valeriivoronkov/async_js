// simple PubSub example
['burum','bum-bum','burum-burum']
.forEach((name) => {
  process.on('exit', () => {
    console.log('Bye', name);
  });
});
