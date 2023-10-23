const mongoose = require("mongoose");

const dbURI =
	"mongodb+srv://new-user1:<password>@my-messaging-app.qhp2w0c.mongodb.net/?retryWrites=true&w=majority";

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Connected to MongoDB Atlas");
	})
	.catch((err) => {
		console.error("Error connecting to MongoDB Atlas: ", err);
	});

module.exports = mongoose.connection;
