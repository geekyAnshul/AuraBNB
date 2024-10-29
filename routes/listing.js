const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
const Listing = require("../models/listing.js"); 
const {listingSchema}= require("../schema.js");
const {isLoggedIn} = require("../middleware.js");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const listing = require("../models/listing.js")

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    const { listing } = req.body;
    if(error){
       let errMsg = error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errMsg);
    }else{
       next();
    }
   }

   //new
router.get("/new",isLoggedIn,(req,res)=>{
    
    res.render("listings/new");
})
   
router.get("/:id",wrapAsync(async(req,res)=>{
    const {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if(!listing){
        req.flash("error","Listing that You are requesting doesnot exist");
        res.redirect("/listings");
    }
    res.render("listings/show",{listing});
}));

router.get("/", wrapAsync(async (req, res) => {
    const allListing = await Listing.find({});

    res.render("listings/index", { allListing });
}));





// create listings
router.post("/",isLoggedIn,validateListing,wrapAsync(async (req, res)=>{
    
     const newListing = new Listing(req.body.listing);
     newListing.owner = req.user._id;
       await newListing.save();
       req.flash("success","New Listing Created Successfully");
       res.redirect("/listings");   
}));




router.get("/:id/edit",isLoggedIn,wrapAsync(async(req,res)=>{
    const {id } =req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing that You are requesting doesnot exist");
        res.redirect("/listings");
    }
    req.flash("success","Listing Updated Successfully");
    res.render("listings/edit",{listing});

}));

router.put("/:id",isLoggedIn,validateListing,wrapAsync(async (req,res)=>{
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    res.redirect(`/listings/${id}`);
}));
router.delete("/:id",isLoggedIn,wrapAsync(async (req,res)=>{
    const {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("error","Listing Deleted Successfully");
    res.redirect("/listings");
}));

module.exports = router;