// 1. Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client'

// 2. Get a reference of the root div from the HTML file
const el = document.getElementById('root')

// 3. Tell React to take control of the element
const root = ReactDOM.createRoot(el);

// 4. Create a component
function App() {
    let message = "Bye there!"
    if (Math.random() > 0.5) {
        message = "Hello, there"
    }
    const date = new Date();
    const time = date.toLocaleTimeString()

    return <div>
        <h1>{message}</h1>
        The current time is <h2>{time}</h2>
    </div>;
}

// 5. Show the component on the screen
root.render(<App />);