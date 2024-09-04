# JSX in React

You can go to [https://babeljs.io/repl](https://babeljs.io/repl) to see how your jsx is translated to the actual React code.

One example is shown in the following.

```jsx
<div>
  <h1>Hi there</h1>
  <ul>
    <li>Red</li>
    <li>Green</li>
  </ul>
</div>
```

The code is translated to the following javascript code.

```javascript
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/*#__PURE__*/_jsxs("div", {
  children: [/*#__PURE__*/_jsx("h1", {
    children: "Hi there"
  }), /*#__PURE__*/_jsxs("ul", {
    children: [/*#__PURE__*/_jsx("li", {
      children: "Red"
    }), /*#__PURE__*/_jsx("li", {
      children: "Green"
    })]
  })]
});
```