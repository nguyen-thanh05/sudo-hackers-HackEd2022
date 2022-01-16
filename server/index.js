async function addQuestion() {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");
		const doc = {
			question: "Who are you?",
		};
		await collection.insertOne(doc);
		let docObj = await collection.findOne(doc);
		let docId = docObj._id;
		return docId;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const router = express.Router();

app.use("/", router);

const cors = require("cors");

app.use(cors());

router.post("/prof", (req, res) => {
	addQuestion();
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
