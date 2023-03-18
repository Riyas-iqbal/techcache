# Moongose

Mongoose is an Object Data Modeling (ODM) library for MongoDB. It provides a higher-level abstraction over the raw MongoDB Node.js driver and allows for the creation of models and schemas that define the structure of the data stored in MongoDB. Mongoose provides features such as validation, middleware, and schema-based migrations that are not available in the raw MongoDB driver, making it a popular choice for working with MongoDB databases in Node.js applications.


```javascript
const mongoose = require('mongoose');

mongoose.connect('<mongoDB connection string>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB database!');
});
```