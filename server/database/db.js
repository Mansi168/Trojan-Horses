import mongoose from "mongoose";



const Connection = async (username, password) => {
    const URL = ` mongodb://${username}:${password}@ac-yv9tefh-shard-00-00.hhaplrg.mongodb.net:27017,ac-yv9tefh-shard-00-01.hhaplrg.mongodb.net:27017,ac-yv9tefh-shard-00-02.hhaplrg.mongodb.net:27017/?ssl=true&replicaSet=atlas-7duy2n-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await  mongoose.connect(URL, {useNewUrlParser: true});
      console.log('database connected successfully');
    }catch(error){
        console.log('database not connected successfully', error);
    }
}
export default Connection;