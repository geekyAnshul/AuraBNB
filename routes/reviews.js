const express = require('express');
const router = express.Router({mergeParams: true});

const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");
 const Review = require("../models/reviews.js");  // Importing the review model.
const {reviewSchema}= require("../schema.js");
const Listing = require("../models/listing.js"); 
const { isLoggedIn, isReviewAuthor } = require('../middleware.js');

const validateReview = (req,res,next)=>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
       let errMsg = error.details.map((el)=>el.message).join(",");
       throw new ExpressError(400,errMsg);
    }else{
       next();
    }
   }

   router.post("/",isLoggedIn,validateReview,wrapAsync(async(req,res)=>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
     
    await newReview.save();
    await listing.save();
    
    res.redirect(`/listings/${listing._id}`);
}));

router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

module.exports = router;