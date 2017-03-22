var os = require('os');
var gm = require('gm');
var async = require('async');
var concurrency = os.cpus().length;

var gmQueue = async.queue(function(image, callback) {
	image.toBuffer(function(err, buffer) {
		callback(err, buffer);
	});
}, concurrency);

module.exports = function(fn) {
	return {
		name: 'gm',
		transform: function(server, req, buffer, headers, callback) {
			var image;

			try { image = gm(buffer); fn(image); }
			catch (err) { return callback(err); }

			gmQueue.push(image, function(err, buffer) {
				if (err) return callback(err);
				if (image._outputFormat) {
					headers['Content-Type'] = 'image/' + image._outputFormat;
				}
				callback(null, buffer, headers);
			});
		}
	};
};

module.exports.setMaxConcurrency = function(n) {
	gmQueue.concurrency = n;
};
