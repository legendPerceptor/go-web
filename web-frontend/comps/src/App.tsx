import { GoBell, GoCloud, GoDatabase } from "react-icons/go";
import Button from './components/Button';

import Accordion from './components/Accordion';

function App() {

    const items = [
        {
            id: 'ljl35j',
            label: "Can I use React on a project?",
            content: "You can use React on any project you want."
        },
        {
            id: '1l4j2',
            label: "Can I use React on a project?",
            content: "You can use React on any project you want."
        },
        {
            id: 'kjl1l',
            label: "Can I use React on a project?",
            content: "You can use React on any project you want."
        }
    ];

    return <Accordion items={items} />;
}

export default App;