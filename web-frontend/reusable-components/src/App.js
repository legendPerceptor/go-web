import ProfileCard from "./ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

console.log(AlexaImage);
console.log(SiriImage);

function App() {
    return (
        <div>
            <div>Personal Digital Assistants</div>
            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage}/>
            <ProfileCard title="Qiana" handle="@qiana32" image={CortanaImage}/>
            <ProfileCard title="Jax" handle="@jax84" image={SiriImage}/>
        </div>
    )
}

export default App;