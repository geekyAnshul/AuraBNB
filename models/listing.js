//const { required } = require('joi');
const Review = require("./reviews.js")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingSchema = new Schema({
     title:
     {type:String,
      required:true,
     },
     description:String,
     image:{type:String,
          default:"https://th.bing.com/th/id/OIP.ZW2JZc9OxO13_NW3yAch-wAAAA?rs=1&pid=ImgDetMain",
           set : (v)=>v==="" ? "https://th.bing.com/th/id/OIP.ZW2JZc9OxO13_NW3yAch-wAAAA?rs=1&pid=ImgDetMain" : v,
       },
     price:{
          type:Number,
          min : 1000,
     },
     location:String,
     country:String,
     reviews:[{
          type : Schema.Types.ObjectId,
          ref : "Review"
    }],
    owner:{
     type : Schema.Types.ObjectId,
     ref: "User",
    }
});

listingSchema.post("findOneAndDelete",async(listing)=>{
     if(listing){
          await Review.deleteMany({_id:{$in:listing.reviews}});
     }
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;