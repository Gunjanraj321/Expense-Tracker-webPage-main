
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@trackexpenses.rdrqjb4.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
let _db;
const MongoConnect = async () => {
  try {
    const Client = await client.connect();
    _db = Client.db("ExpenseTracker");
    console.log("successfully connected to MongoDB!");
  } catch (error) {
    console.error(error);
  }
};
const getDb = () => {
  if (_db) {
    return _db;
  } else {
    throw "No Database Connection";
  }
};

exports.MongoConnect = MongoConnect;
exports.getDb = getDb;

