import { useState } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";

function Accordion({ items }) {

    const[expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        expandedIndex !== -1 ? setExpandedIndex(-1) : setExpandedIndex(nextIndex);
    }

    const renderedItems = items.map((item, index) => {
        
        const isExpanded = index === expandedIndex;

        const icon = <span className="text-xl p-5">
            {isExpanded? <GoChevronDown /> : <GoChevronLeft />}
            </span>

        return (
        <div key={item.id}>
            <br></br>
                <div className=" justify-between flex p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div> 
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion;