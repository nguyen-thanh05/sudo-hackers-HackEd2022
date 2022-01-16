const axios = require("axios");

class DataCalls {
    constructor() {
        this.url = "http://localhost:3001/";
    }

    async postData() {
        let url = '${ this.url }';
        const response = await axios.post(url);
        console.log(response);
        return response;
    }
    async createProfDoc() {
        let url = '${ this.url }ProfDoc';
        const response = await axios.post(url);
        console.log(response);
        return response;
    }

    async addQuestion() {
        const dbName = "qna";
        const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
        var MongoClient = require("mongodb").MongoClient;

        try {
            const conn = MongoClient.connect(url, { useUnifiedTopology: true });
            let db = await conn;
            let ui = await db.db(dbName);
            let collection = ui.collection("qeueue");
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

    async function createSessionDoc(profdoc) {
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

router.post("/prof", (req, res) => {
    addQuestion();
});

router.post("/profDoc", (req, res) => {
    ____();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
    
}

export default DataCalls;


