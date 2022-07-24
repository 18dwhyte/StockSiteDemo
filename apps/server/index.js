var  User = require('./user')

const express = require('express')
const app = express()
let cors = require("cors");
var bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//MongoDB Initialization
var mongoose = require('mongoose');
mongoose.connect('[INSERT MONGODB CONNECTION HERE]');
const { MongoClient, Collection } = require("mongodb");
const { json } = require('body-parser');
// Connection URI
const uri =
  "[insert MongoDB URL HERE]";
// Create a new MongoClient
const client = new MongoClient(uri);
async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db("StockSiteDB").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

//Stock API information
const finnhub = require('finnhub');
const { Console } = require('console');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "[INSERT FINNHUB.IO API KEY HERE]"
const finnhubClient = new finnhub.DefaultApi()

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/signup', (req, res) => {
  res.send("hello");
})


app.post('/signup', (req, res) => {
    res.send(req.body);
    console.log("reached server");
    const user = new User(req.body.email, req.body.username,req.body.password,5000,[]);
    const col = client.db("StockSiteDB").collection('UserData');
    col.insertOne(user);
    //uncomment this line to delete all the records in database collection
    //col.deleteMany({});
    run().catch(console.dir);
  })

  app.post('/login', (req,res)=>{
    try{
    var user = col.findOne({username:this.req.username});
    }
    catch(err){
      console.log(err);
    }
    //login condition where invalid
  })

  app.get('/stock',(req,res)=>{
  })

  app.post('/stock',(req,res)=>{

    //gets Stock Name, Stock Abbreviation, and Logo
    finnhubClient.companyProfile2({'symbol': req.body.name}, (error, data1, response) => {

      //gets stock price and percent change.
      finnhubClient.quote(req.body.name, (error, data, response) => {
        res.send({
          "visuals": data1,
        "analytics": data});
      });
    });
  })

  app.listen(3000);
