const mongoose = require('mongoose');
const Connection = ()=>{
    const DB_URI = `mongodb+srv://may:Lahlooh++55@cluster0.vusgojk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    try{
        mongoose.connect(DB_URI);
        console.log('Database connected successfully...');
    }catch(error){
        console.log("Error while connecting with the database ",error.message);
    }
};
module.exports = Connection;