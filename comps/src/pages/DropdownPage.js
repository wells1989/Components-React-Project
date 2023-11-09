import DropDown from '../components/DropDown';
import { useState } from 'react';

function DropdownPage() {

  const options = [
    { label: "Red", value: 'red' },
    { label: "Green", value: 'green'},
    { label: "Blue", value: 'blue'},
  ]

  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option)
  }

  return (
      <div className="flex justify-center m-5">
        <DropDown options={options} value={selection} onChange={handleSelect}/>
      </div>
  );
} 

export default DropdownPage;
