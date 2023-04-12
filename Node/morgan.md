# Logging 

- Morgan (http Logging)
- Winston
- pino

### Morgan
 
Morgan is HTTP request logger middleware for node.js

```javascript
const express = require('express');
const morgan = require('morgan');

const app = express();

// Use morgan middleware to log HTTP requests
app.use(morgan('combined'));

// Define your routes and request handlers here
// ...

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
```

The morgan middleware takes a string argument that specifies the format of the log output. The 'combined' format includes the IP address, date, HTTP method, URL, HTTP version, response status, response size, and referrer.

You can customize the log output by specifying a different format string. For example, the following format string would log only the HTTP method, URL, and response status:


```javascript
app.use(morgan(':method :url :status'));
```

