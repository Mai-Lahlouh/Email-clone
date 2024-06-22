const mongoose =  require('mongoose');
const Schema = mongoose.Schema ;
const emailSchema = new Schema({
    id:{
        type: String,
        required : true,
    },
    to:{
        type : String,
    },
    from:{
        type : String,
        required : true,
    },
    subject : String,
    body: String,
    date : {
        type : Date,
        required : true,
    },
    trash : {
        type : Boolean,
        required: true,
        default: false
    },
    type : {
        type: String,
        required: true,
    }
}
);
const email = mongoose.model('emails',emailSchema);
module.exports = email;
