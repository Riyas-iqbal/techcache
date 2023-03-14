# Global Objects in JavaScript

Global objects in JavaScript are objects that are available globally throughout the entire script, meaning they can be accessed from anywhere within a JavaScript program. They are predefined objects that are built into the JavaScript language and are part of the global scope.

Some examples of global objects in JavaScript include:

- `Math object`: This object provides mathematical functions like `Math.PI`, `Math.random()`, `Math.round()`, etc.
- `Date` object: This object provides methods to work with dates and times.
- `String` object: This object provides methods to work with strings.
- `Array` object: This object provides methods to work with arrays.
- `JSON` object: This object provides methods to work with JSON (JavaScript Object Notation) data.
- `console` object: This object provides methods to log messages to the browser console.

### Where does the global object reside?

It is important to note that while these objects are available globally, it is best practice to avoid using them as global variables as it can cause naming conflicts and make debugging more difficult. Instead, it is recommended to use them as properties of a specific object or namespace to keep your code organized and avoid polluting the global namespace.

The V8 engine provides a global object that is accessible from any JavaScript code running within the engine. This global object includes all of the built-in objects and functions that are part of the JavaScript language specification, such as the Math object, Date object, and console object.

In addition to the built-in objects, the global object also includes any custom objects or functions that are added to it during the execution of a script. These custom objects and functions can be created by the developer or added by third-party libraries.

### Global object outside V8 engine

The Node.js global object includes not only the built-in objects and functions from the V8 engine, but also additional objects and functions that are specific to Node.js. For example, the "process" object is a global object provided by Node.js that allows you to interact with the current Node.js process, such as accessing environment variables and command line arguments.

- process object: The process object is a global object that provides information about, and control over, the current Node.js process. It includes properties such as process.env (an object containing the environment variables), process.argv (an array containing the command line arguments), and methods like process.exit() (to terminate the current process).

- console object: The console object is a global object that provides a way to log messages to the console. It includes methods like console.log(), console.error(), and console.warn().

- Buffer object: The Buffer object is a global object that provides a way to manipulate binary data in Node.js. It is used to store raw data and can be converted to and from various data formats, including strings and arrays.

- timers: The global object provides a set of functions that allow you to schedule functions to be executed at a later time, including setTimeout(), setInterval(), setImmediate(), and process.nextTick().

- Global variables: Node.js provides a number of global variables that are not part of the JavaScript language specification, including __dirname, __filename, and require.

