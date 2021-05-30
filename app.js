const express = require('express')
const ejs = require('ejs') 
const netflixController = require('./netflixController')
const app = express()
const { MongoClient } = require("mongodb");
app.use(express.static(__dirname + '/public')); 
app.set('view engine','ejs')
app.listen(4141)
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false})



//Database Connection

const uri =
"mongodb+srv://root:root@cluster0.jiwf7.mongodb.net/netflixAssistant?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useUnifiedTopology: true });

var whatIsStatusNow;
var whoIsTheUser;

//Database Update
// async function run() {
//     try {
//       await client.connect();
//       const database = client.db("netflixAssistant");
//       const statusCollection = database.collection("StatusCollection");
//       const filter = {flag: true};
//       const query = {flag: true};

//       // const updateDoc = {
//       //   $set: {
//       //       status:  "occupied",
//       //       by : "dhoni",
//       //    },
//       // };
//       // const result = await statusCollection.updateOne(filter, updateDoc); 
//       const currentStatus = await statusCollection.findOne(query); 
//       whatIsStatusNow = currentStatus.status;
//       whoIsTheUser = currentStatus.by;
//       console.log(currentStatus.status);
//       console.log(
//        // `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
//        "found"       );
//     } finally {
//       await client.close();
//     }
//   }
//   run().catch(console.dir);

  console.log(whatIsStatusNow)
  console.log(whoIsTheUser)
 
  app.get('/login',(req,res)=>{
    res.render('login.ejs')
  })
  app.get('/',async (req,res)=>{

    await client.connect();
    const database = client.db("netflixAssistant");
    const statusCollection = database.collection("StatusCollection");
    const filter = {flag: true};
    const query = {flag: true};
    const currentStatus = await statusCollection.findOne(query);
    whatIsStatusNow = currentStatus.status;
    whoIsTheUser = currentStatus.by;
    
    console.log(whatIsStatusNow)
    console.log(whoIsTheUser)
    await client.close();


    var data = [{item: whatIsStatusNow},{item: whoIsTheUser}]
    res.render('index',{status : data})
  })
