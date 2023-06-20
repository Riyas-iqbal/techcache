## Primitive types

In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. 
There are 7 primitive data types:

- **String** - A string is a sequence of characters used to represent text. a String is one of the primitive values and the String object is a wrapper around a String primitive.
- **Number** - Number is a numeric data type in the double-precision 64-bit floating point format (IEEE 754)
- **Bigint** - BigInt is a numeric data type that can represent integers in the arbitrary precision format
- **Boolean** -  Boolean is a logical data type that can have only the values true or false.
- **Undefined** - Undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.
- **Symbol** - Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
- **Null** - In computer science, a null value represents a reference that points, generally intentionally, to a nonexistent or invalid object or address
    
In JavaScript, null is marked as one of the primitive values, because its behavior is seemingly primitive. However, when using the typeof operator, it returns "object".

```js
console.log(typeof null); // "object"
```

This is considered a bug, but one which cannot be fixed because it will break too many scripts.

---

Primitives have no methods but still behave as if they do. When properties are accessed on primitives, JavaScript auto-boxes the value into a wrapper object and accesses the property on that object instead. For example, "foo".includes("f") implicitly creates a String wrapper object and calls String.prototype.includes() on that object. This auto-boxing behavior is not observable in JavaScript code but is a good mental model of various behaviors — for example, why "mutating" primitives does not work (because str.foo = 1 is not assigning to the property foo of str itself, but to an ephemeral wrapper object).