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
        <input style={{ border: '3px solid red'}} type="number" min={5} max={15} />
        <input placeholder="hi there" />
    </div>;
}

export default App;