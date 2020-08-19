const uploadcontroler = require("../controllers/uploadcontroler/uploadcontroler");


const parser = (req, res, next) => {
    uploadcontroler.upload(req, res, function (err) {
		// req.file is the `avatar` file
		// req.body will hold the text fields, if there were any
		if (err) {
			return res.end("Error uploading file.");
		}
		next();
	});
};
module.exports = parser;
