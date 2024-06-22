const Email = require('../model/emails');
const saveSentEmail = (request, response) =>{
    try{
        const email = new Email(request.body);
        email.save();
        response.status(200).json('email saved successfully...'); 
    }catch(error){
        response.status(500).json(error.message);
    }
};
const getEmails = async (request,response) =>{
    try{
        let emails;
        if(request.params.type === 'trash'){
            emails = await Email.find({trash : true });                
        }else{
            emails = await Email.find({type : request.params.type});
        }
        return response.status(200).json(emails);
    }catch(err){
        console.log(err.message);
        response.status(500).json(err.message);
    }
};
const moveEmailToTrash = async (request,response) =>{
    try{
        await Email.updateOne({ _id : { $in : request.body }}, { $set: { trash: true, type: '' }});
        return response.status(200).json('email deleted successfully..');
    }catch(error){
        console.log(error.message);
        response.status(500).json(error.message);
    }
};

module.exports = {saveSentEmail,getEmails,moveEmailToTrash};