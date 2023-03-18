# Basics

## Documnets

in MongoDB, data is stored in a document-oriented data model. A document is a set of key-value pairs. It is similar to a row in a relational database table.

```javascript
{
   "_id": ObjectId("615aa6c0d6d25b6fd56349a9"),
   "name": "John Doe",
   "age": 35,
   "address": {
      "street": "123 Main St",
      "city": "New York",
      "state": "NY",
      "zip": "10001"
   }
}
```

## Collections 

A collection is a grouping of MongoDB documents. It is similar to a table in a relational database.

```javascript
db.users.insertMany([   {      "_id": ObjectId("615aa6c0d6d25b6fd56349a9"),      "name": "John Doe",      "age": 35   },   {      "_id": ObjectId("615aa6c0d6d25b6fd56349aa"),      "name": "Jane Smith",      "age": 28   }])
```

## Indexes

Indexes help to improve the performance of queries by allowing the database to quickly locate data. In MongoDB, indexes are created on specific fields in a collection.
it can greatly improve query performance by reducing the number of documents that need to be scanned.

```javascript
db.users.createIndex({ "name": 1 })
```

## Aggregation

Aggregation operations process data records and return computed results. Aggregation operations group values from multiple documents together and perform a variety of operations on the grouped data to return a single result.

```javascript
db.orders.aggregate([
   { $match: { status: "completed" } },
   { $group: { _id: "$customer", total: { $sum: "$amount" } } }
])
```

## Replication

MongoDB replication provides high availability by maintaining multiple copies of data. Replication can provide read scalability by allowing the deployment of additional read-only copies of data.

```javascript
rs.initiate()
rs.add("mongo1.example.net")
rs.add("mongo2.example.net")
```

## Sharding

Sharding is a method for distributing data across multiple machines. It is used to horizontally scale a MongoDB database by partitioning data across multiple servers.

```mongodb
sh.enableSharding("myDatabase")
sh.shardCollection("myDatabase.myCollection", { "_id": "hashed" })
```

## Transactions

Transactions allow multiple operations to be performed as a single atomic unit of work. Transactions ensure that all operations complete successfully or are rolled back if any operation fails.

```mongodb
session.startTransaction()
try {
   db.accounts.updateOne({ name: "John Doe" }, { $inc: { balance: -100 } })
   db.accounts.updateOne({ name: "Jane Smith" }, { $inc: { balance: 100 } })
   session.commitTransaction()
} catch (error) {
   session.abortTransaction()
}
```

## Querying

MongoDB supports rich query capabilities, including the ability to query documents based on fields, ranges, and even geographic locations.

```mongodb
db.users.find({ age: { $gt: 30 } })
```

## Aggregation Framework
MongoDB's Aggregation Framework provides a powerful set of tools for performing complex data analysis operations on large data sets.

```mongodb
db.sales.aggregate([
   { $match: { date: { $gte: ISODate("2022-01-01") } } },
   { $group: { _id: "$product", totalSales: { $sum: "$amount" } } }
])

```

## Schema design
Unlike traditional relational databases, MongoDB does not require a predefined schema. However, proper schema design is still important for optimal performance and efficient querying.

## 

```mongodb
```

