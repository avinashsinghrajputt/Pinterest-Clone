require('dotenv').config();
const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");
const { post } = require('.');

const dbUrl= process.env.MONGOATLAS;

// mongoose.connect("mongodb://127.0.0.1:27017/pin");
mongoose.connect(dbUrl);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards:{
    type:Array,
    default:[]
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
    ref : "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);