const dbconnect = require('mongodb');

const insert = async ()=>{
    console.log('insert function')
    const db = await dbconnect;
    console.log(db)
}

insert();