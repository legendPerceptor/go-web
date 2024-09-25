import './App.css'
import AnimalShow from './AnimalShow';
import {useState} from 'react';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse']
    return animals[Math.floor(Math.random() * animals.length)]
}

function Button({callback}) {
    return (<button onClick={callback}>
            Add Animal
        </button>
    );
}

function App() {
    const [count, setCount] = useState(0);
    const [animals, setAnimals] = useState([]);

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} index={index} key={index}/>
    })

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]);
    }

    return <div className="app">
        <Button callback={handleClick} />
        <div className="animal-list">
            {renderedAnimals}
        </div>
    </div>
}

export default App;