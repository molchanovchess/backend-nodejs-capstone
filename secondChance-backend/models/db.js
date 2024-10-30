// db.js
require('dotenv').config();
const { MongoClient } = require('mongodb');

// MongoDB connection URL and database name
const url = process.env.MONGO_URL;
const dbName = process.env.MONGO_DB;

let dbInstance;  // Declare dbInstance outside the function for reuse

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;  // Return the existing dbInstance if already connected
    }

    // Create a new MongoClient instance
    const client = new MongoClient(url);

    try {
        // Task 1: Connect to MongoDB
        await client.connect();

        // Task 2: Connect to the specified database and store it in dbInstance
        dbInstance = client.db(dbName);

        // Task 3: Return the database instance
        return dbInstance;

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}

module.exports = connectToDatabase;
