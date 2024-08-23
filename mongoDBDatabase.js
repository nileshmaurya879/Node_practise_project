const { MongoClient } = require('mongodb');

// Connection URL using IPv4
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Database Name
const dbName = 'MyDatabase001';

async function dbConnect() {
    try {
        // Connect to the MongoDB client
        const result = await client.connect();
        
        // Get the database and collection
        const db = result.db(dbName);
        const collection = db.collection('TestCollection001');

        return collection;
    } catch (error) {
        console.error('Failed to connect to the database:', error);
        throw error; // Re-throw the error after logging it
    }
}

module.exports = dbConnect;
