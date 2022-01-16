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

async function updateQuestion(qid_value, question_text) {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");

		let query = { qid: qid_value };
		//let values = { $set: {question: question_text } };

		//await collection.updateOne(query, values);
		return 1;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

async function deleteQuestion(qid_value) {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");
		//let query = { qid: qid_value }; 

		//await collection.deleteOne(query);
		return 1;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

async function getQuestion(qid) {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");

		//let query = { qid: qid };
		//let question = await collection.findOne(query);
		//return question;
		return 1;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

async function createSessionDoc(profdoc){
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;
	var code = profdoc.code;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection(code);
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

router.post("/prof/add", (req, res) => {
	addQuestion();
});

router.post("/prof/update", (req, res) => {
	updateQuestion();
	//updateQuestion(1, "Testing");
});

router.post("/prof/delete", (req, res) => {
	deleteQuestion(1);
	//deleteQuestion();
});

router.post("/prof/get", (req, res) => {
	getQuestion();
});


app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
