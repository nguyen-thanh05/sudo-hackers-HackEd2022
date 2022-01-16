async function addQuestion(sessionid_value) {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");

		//let array = await collection.findOne({sessionid: sessionid_value}, { projection: {_id: 0, question: 1}});
		let array = await collection.aggregate({sessionid: sessionid_value}, {$size: "question"});
		console.log(array);

		let session = {
			sessionid: sessionid_value
		};

		let pushvalue = {$push: {"question" : {1: "DVD"} }}
		await collection.updateOne(session, pushvalue);
		//let docObj = await collection.findOne(doc);
		//let docId = docObj._id;
		//return docId;
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
		let values = { $set: {question: question_text}};

		await collection.updateOne(query, values);
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
		let query = { qid: qid_value }; 

		await collection.deleteOne(query);
		return 1;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

async function getQuestion(qid_value) {
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;

	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");

		let query = { qid: qid_value};
		let projection = { projection: {_id: 0, question: 1}};	 
		let question_value = await collection.findOne(query, projection);
		console.log(question_value);
		return question_value;
		//return 1;
	} catch (err) {
		console.log(err);
		return -1;
	}
}

async function createSessionDoc(profdoc){
	const dbName = "qna";
	const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
	var MongoClient = require("mongodb").MongoClient;
	var code = profdoc;
	try {
		const conn = MongoClient.connect(url, { useUnifiedTopology: true });
		let db = await conn;
		let ui = await db.db(dbName);
		let collection = ui.collection("queue");
		const doc = {
			sessionid: code,
			question: [],
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

function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("0" + firstPart.toString(36)).slice(-3);
    secondPart = ("0" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const router = express.Router();

app.use("/", router);

const cors = require("cors");

app.use(cors());

router.post("/prof/add", (req, res) => {
	addQuestion('m8i4fx');
	//createSessionDoc(generateUID());
});

router.post("/prof/update", (req, res) => {
	//updateQuestion();
	updateQuestion(1, "Testing");
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
