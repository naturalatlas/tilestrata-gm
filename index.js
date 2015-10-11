var gm = require('gm');

module.exports = function(fn) {
	return {
		name: 'gm',
		transform: function(server, req, buffer, headers, callback) {
			var image;

			try { image = gm(buffer); fn(image); }
			catch (err) { return callback(err); }

			image.toBuffer(function(err, buffer, info) {
				if (image._outputFormat) {
					headers['Content-Type'] = 'image/' + image._outputFormat;
				}
				if (err) return callback(err);
				callback(null, buffer, headers);
			});
		}
	};
};
