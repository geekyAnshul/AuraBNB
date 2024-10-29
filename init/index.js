const mongoose = require('mongoose');
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const key = process.env.DB_URL

main()
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error("Could not connect to MongoDB", err));

async function main(){
    await mongoose.connect(key);
}
const initDb = async (req,res)=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"670b42dd31032759dcbb7cdc"}));
     await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDb();