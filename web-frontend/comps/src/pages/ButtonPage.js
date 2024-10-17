import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from '../components/Button';


function ButtonPage() {
    return <div>
        <div>
            <Button primary rounded outline
            className="mb-5">
                <GoBell/>
                Click Me!
            </Button>
        </div>
        <div>
            <Button secondary>
                <GoCloud/>
                Hi there!
            </Button>
        </div>
        <div>
            <Button secondary outline>
                <GoDatabase/>
                Good!
            </Button>
        </div>
        <div>
            <Button success>Success!</Button>
        </div>
        <div>
            <Button danger rounded>False!</Button>
        </div>
        <div>
            <Button warning>Warning!</Button>
        </div>
    </div>;
}

export default ButtonPage;