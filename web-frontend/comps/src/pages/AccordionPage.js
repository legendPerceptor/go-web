import Accordion from '../components/Accordion';

function AccordionPage() {

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

export default AccordionPage;