# Intermediate
----------

## GridFS

GridFS is a specification for storing and retrieving large files, such as images or videos, in MongoDB. GridFS stores files in small chunks, which allows for efficient retrieval of large files.

```javascript
var bucket = new GridFSBucket(db)
var stream = bucket.openUploadStream("myFile.jpg")
fs.createReadStream("myFile.jpg").pipe(stream)
```

## Change Streams

Change Streams allow applications to receive real-time notifications when data changes in a MongoDB database. Change Streams can be used to build reactive and event-driven applications.


```javascript
var pipeline = [ { $match: { "fullDocument.status": "completed" } } ]
var changeStream = db.orders.watch(pipeline)
changeStream.on("change", function(change) {
   console.log(change.fullDocument)
})
```

## Full-text search
MongoDB provides powerful text search capabilities, including support for text indexing and search operators.

```mongodb
db.products.createIndex({ description: "text" })
db.products.find({ $text: { $search: "coffee" } })

```

## Geospatial indexing
MongoDB provides support for geospatial indexing and querying, making it a good choice for applications that require location-based searches.

```mongodb
db.places.createIndex({ location: "2dsphere" })
db.places.find({
   location: {
      $near: {
         $geometry: {
            type: "Point",
            coordinates: [ -73.97, 40.77 ]
         },
         $maxDistance: 10000
      }
   }
})

```

## Security
MongoDB provides a variety of security features, including authentication, encryption, and access control.
```mongodb
db.createUser({
   user: "myUser",
   pwd: "myPassword",
   roles: [ { role: "readWrite", db: "myDatabase" } ]
})

```