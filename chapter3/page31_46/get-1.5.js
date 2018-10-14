const promise = $.get('/whatever');
promise.done(onSuccess);
promise.fail(onFailure);
promise.always(onAlways);
