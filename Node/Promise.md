# Promises

**What are Promises?**

Promises are objects which are used to perform asynchronous operations. They are just like placeholders to store a future value that will be returned after some time. They contain two properties: PromiseState and PromiseResult.


 **Importance of Promises:**

* Promises can help us to write trust worthy code.
* Promises are used to solve the problems of callbacks like inversion of control and callback hell.
* They give us the result prompt in three states:
    - Pending
    - Fulfilled
    - Rejected
* We can attach function to promise object and retrieve its value unlike callbacks no need to pass the function.
* Nesting can be done in Promises and with the help of that we can return the values in each individual chain.