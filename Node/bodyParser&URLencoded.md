## Body Parser 
When a client sends data to a server using HTTP, the data is usually sent as part of the request body. This data can be in different formats, such as JSON or URL-encoded.

---

body-parser JSON is a middleware that is used to parse the incoming request bodies in a Node.js application.

```javascript
app.use(bodyParser.json({extended: true }))
```
* configuring the middleware to parse the incoming request body as JSON

* extended option enables deep parsing of nested objects in the request body.

## Body Parser (URL encoded)

In the case of URL-encoded data, the data is sent as key-value pairs in the body of the request, with each key-value pair separated by an ampersand (&) and each key and value separated by an equals sign (=). For example:

```JSON
name=John&age=30&city=New+York
```

When the Node.js application uses the body-parser middleware to parse incoming request bodies as URL-encoded, it means that the middleware is responsible for converting the URL-encoded data in the request body into a JavaScript object that can be easily processed by the application. This makes it easier for the application to access the data sent by the client in a structured format, and to use that data to perform operations such as saving it to a database or processing it in some way.

---

```javascript
app.use(bodyParser.urlencoded({extended: true }))
```

configuring the middleware to parse the incoming request body as URL-encoded




