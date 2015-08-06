
module.exports = {

	split2: function(str, delim=' ') {
		if (str) {
		    var parts=str.split(delim);
		    return [parts[0], parts.splice(1,parts.length).join(delim)];
		} else {
			return [str, null];
		}
	}

}