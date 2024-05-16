const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://stephmaslard:ulxrR2x6znSzviyT@cluster0.rnlemwf.mongodb.net/TICKET-HACK'

//timeout
mongoose.connect(connectionString, { connectTimeoutMS : 12000})
.then(()=> console.log('Database connected'))
.catch(error => console.error(error));
//module.exports = connectionString; // Do not edit/remove this line