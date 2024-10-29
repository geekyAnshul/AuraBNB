//all imports
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path'); // Add this line to require the path module
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const listings = require("./routes/listing.js");
const reviews= require("./routes/reviews.js")
const user = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
require('dotenv').config();
const key = process.env.DB_URL



main()
   .then(() => console.log("Connected to MongoDB"))
   .catch(err => console.error("Could not connect to MongoDB", err));

async function main(){
    await mongoose.connect(key);
}

const sessionOptions = {
    secret : "mysupersecretcode",
    resave : false,
    saveUninitialized  : true,
    cookie :{
        expires : Date.now() + 7 *24* 60 * 60*1000,
        maxAge : 7 *24* 60 * 60*1000,
        httpOnly : true, //cross site scripting attacks
        }
}

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session()); //ability to identify users as they browse from page to page

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, 'views')); // Make sure the path module is used
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method")); // Add this line to enable PUT and DELETE requests
app.engine('ejs',ejsMate);


//just for testing....no use
app.get("/",(req,res)=>{
    res.send("Hello,i am index route")
})

app.get("/demouser",async(req,res)=>{
    let fakeUser = new User({
        email: "demo@gmail.com",
        username: "demo",
    })
    let registeredUser = await User.register(fakeUser,"demo");
    res.send(registeredUser);
});

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
})

 app.use("/listings",listings);
 app.use("/listings/:id/reviews",reviews);
 app.use("/",user);
 

app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page Not Found")); // Custom error handling
})
app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something Went Wrong"}=err;
    console.log(err);
    res.status(statusCode).render("error",{err});
 });


app.listen(8080, () => {
    console.log("server listening on 8080");
});