# React

## React Core Concepts

- Components
- Props
- State

## Components
User interfaces can be broken down into smaller building blocks called components.

Components allow you to build self-contained, reusable snippets of code. If you think of components as LEGO bricks, you can take these individual bricks and combine them together to form larger structures. If you need to update a piece of the UI, you can update the specific component or brick.

This modularity allows your code to be more maintainable as it grows because you can easily add, update, and delete components without touching the rest of our application.

## Props

Similar to a JavaScript function, you can design components that accept custom arguments (or props) that change the component’s behavior or what is visibly shown when it’s rendered to the screen. Then, you can pass down these props from parent components to child components.

```jsx
function Header(props) {
    console.log(props) // { title: "React 💙" }
  return <h1>React 💙</h1>
}

function HomePage() {
  return (
    <div>
      <Header title="React 💙" />
    </div>
  )
}

ReactDOM.render(<HomePage />, app)
```

Since props is an object, you can use object destructuring to explicitly name the values of props inside your function parameters

we can rewrite it to
```jsx
function Header({ title }) {
  console.log(title);
  return <h1>{title}</h1>; //to use variables in react you have to wrap it in curly bracket
}
```

You can think of curly braces as a way to enter "JavaScript land" while you are in "JSX land". You can add any JavaScript expression (something that evaluates to a single value) inside curly braces. For example:

- An **object property**  with dot notation.
```jsx
function Header(props) {
  return <h1>{props.title}</h1>;
}
```
- A **template literal**
```jsx
function Header({ title }) {
  return <h1>{`Cool ${title}`}</h1>;
}
```
- The  **returned value of a function**
```jsx
function createTitle(title) {
  if (title) {
    return title;
  } else {
    return 'Default title';
  }
}

function Header({ title }) {
  return <h1>{createTitle(title)}</h1>;
}
```
- Or  **ternary operators**
```jsx
function Header({ title }) {
  return <h1>{title ? title : 'Default Title'}</h1>;
}
```

## State and Hooks

React has a set of functions called hooks. Hooks allow you to add additional logic such as state to your components. You can think of state as any information in your UI that changes over time, usually triggered by user interaction.