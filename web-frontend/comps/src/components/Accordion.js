import { useState } from 'react';

import { FaChevronLeft, FaChevronDown } from "react-icons/fa";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (index) => {
        setExpandedIndex(currentExpandIndex => {
            if(currentExpandIndex === index) {
                return -1;
            } else {
                return index;
            }
        })
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        
        const icon = <span className="text-xl">{isExpanded? <FaChevronDown /> : <FaChevronLeft />}</span>

        const content = isExpanded && <div className="border-b p-5">{item.content}</div>;

        return (
            <div key={item.id} onClick={() => {handleClick(index)}}>
                
                <div className='flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer'>
                    {item.label} {icon}
                </div>
                {content}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;