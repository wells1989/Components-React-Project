import { useState, useEffect, useRef } from "react"
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

function DropDown({ options, value, onChange }) {

    const [menuToggle, setMenuToggle] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) return;

            if (!divEl.current.contains(event.target)) {
                setMenuToggle(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);

    const handleClick = () => {
        setMenuToggle(!menuToggle)
    }

    window.timeTwo = performance.now();

    const handleSelectClick = (option) => {

        window.timeOne = performance.now();

        setMenuToggle(!menuToggle)
        onChange(option)
    }

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" key={option.value} onClick={() => handleSelectClick(option.value)}>{option.value}</div>
    })
    
    return (
    <div ref={divEl} className="w-48 relative">
        <Panel 
            className="flex justify-between items-center cursor-pointer" 
            onClick={handleClick}>
            {value? value : "Select..."}
            <GoChevronDown className="text-lg"/>
        </Panel>

        {menuToggle && (
        <Panel className="absolute top-full">
            {renderedOptions}
            </Panel>
            )}
    </div>
    )
}

export default DropDown