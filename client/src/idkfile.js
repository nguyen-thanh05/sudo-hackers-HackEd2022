async function addQuestion(PUID) {
    const dbName = "qna";
    const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
    var MongoClient = require("mongodb").MongoClient;

    try {
        const conn = MongoClient.connect(url, { useUnifiedTopology: true });
        let db = await conn;
        let ui = await db.db(dbName);
        let collection = ui.collection("qeueue");
        await collection.updateOne(
            { "PUID": PUID },
            { '$push': { Quuestions: "Ask" } }
        );
        let docObj = await collection.findOne(doc);
    } catch (err) {
        console.log(err);
    }
}

function generateUID() {
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("0" + firstPart.toString(36)).slice(-3);
    secondPart = ("0" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

async function createSessionDoc(profdoc) {
    const dbName = "qna";
    const url = `mongodb+srv://qna:randompassword@qna.wotxc.mongodb.net/qna-database?retryWrites=true&w=majority`;
    var MongoClient = require("mongodb").MongoClient;

    try {
        const conn = MongoClient.connect(url, { useUnifiedTopology: true });
        let db = await conn;
        let ui = await db.db(dbName);
        let collection = ui.collection(code);
        const doc = {
            PUID: generateUID(),
            Quuestions: []
        };
        await collection.insertOne(doc);
        let PUID = docObj.PUID;
        return PUID;
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
    createSessionDOC();
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
