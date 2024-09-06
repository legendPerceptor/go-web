// 1. Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client'

import App from './App'

// 2. Get a reference of the root div from the HTML file
const el = document.getElementById('root')

// 3. Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 4. Create a component
// Created in the App.js file

// 5. Show the component on the screen
root.render(<App />);