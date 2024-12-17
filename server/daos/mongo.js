const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'myProject';

var collection;

async function init () {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    collection = db.collection('documents');
  console.log('connected to database');
}

async function getCollection () {
  return collection;
}

module.exports = { init, getCollection};
