const mongooes = require("mongoose");

async function connect(){
    try {
        await mongooes.connect('mongodb://localhost:27017/DOANCDIO',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database is connected to");
    } catch (error) {
        console.log("Connect failure!!!");
    }
}

module.exports = {connect};