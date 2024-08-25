import React, { useState,useEffect } from 'react';


const MyComponent=({option,searchTerm})=>{
    const [options,setOptions] = useState([
        { id: 1, label: 'Cloud Accounts' },
        { id: 2, label: 'Cloud Accounts Risk Assessment' },
        { id: 3, label: 'widget 3' },
        { id: 4, label: 'Option 4' },
        { id: 5, label: 'Option 5' },
      ]);
//   const [isChecked, setIsChecked] = useState(true);
  const [selectedOptions, setSelectedOptions] = useState(
    JSON.parse(localStorage.getItem('selectedOptions')) || options.map((option) => option.id));
  const [newOption, setNewOption] = useState('');
//   const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    const storedOptions = localStorage.getItem('options');
    const storedSelectedOptions = localStorage.getItem('selectedOptions');
    if (storedOptions && storedSelectedOptions) {
      setOptions(JSON.parse(storedOptions));
      setSelectedOptions(JSON.parse(storedSelectedOptions));
    }    
    // if (storedOptions) {
    //     try {
    //         const parsedOptions = JSON.parse(storedOptions);
    //         console.log('Parsed options:', parsedOptions);
    //         const filteredOptions = parsedOptions.filter((option) => selectedOptions.includes(option.id));
    //     setOptions(filteredOptions);
    //       } catch (error) {
    //         console.error('Error parsing stored options:', error);
    //       }  
    
    // }

    
}, [localStorage.getItem('options')]);



useEffect(() => {
  const storedOptions = localStorage.getItem('options');
  const storedSelectedOptions = localStorage.getItem('selectedOptions');
  if (storedOptions && storedSelectedOptions) {
    setOptions(JSON.parse(storedOptions));
    setSelectedOptions(JSON.parse(storedSelectedOptions));
  }

  //  const filteredOptions = options.filter((option) => selectedOptions.includes(option.id));
  //   localStorage.setItem('options', JSON.stringify(filteredOptions));
  //   localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
  }, [options, selectedOptions]);

  

  const addItem = (item) => {
    setOptions([...options, item]);
    setSelectedOptions([...selectedOptions, item.id]);
    localStorage.setItem('options', JSON.stringify([...options, item]));
    localStorage.setItem('selectedOptions', JSON.stringify([...selectedOptions, item.id]));
    sessionStorage.setItem('selectedOptions', JSON.stringify([...selectedOptions, item.id]));
  console.log('Options:', options);
  console.log('Selected options:', selectedOptions);
  };
  const handleCheckboxChange = (optionId) => {
    const isSelected = selectedOptions.includes(optionId);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((id) => id !== optionId));
       setOptions(options.filter((option) => option.id !== optionId));
       localStorage.setItem('options', JSON.stringify(options.filter((option) => option.id !== optionId)));
       localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions.filter((id) => id !== optionId)));
      } else {
      setSelectedOptions([...selectedOptions, optionId]);
    }
    };
   
  
  // };
  const handleAddNewOption = () => {
    if (newOption.trim() !== '') {
        const newOptionId = options.length + 1;
        addItem({ id: newOptionId, label: newOption });
        setNewOption('');
    }

  };



  return (
    
    <div style={{marginTop:'12px',marginLeft:'24px'}}>
        {console.log('Rendering component...')}
      {options.map((option) => (
        <div key={option.id}>
          <input
            type="checkbox" 
            id={option.id}
            // defaultChecked={selectedOptions.includes(option.id)}
                        checked={selectedOptions.includes(option.id)}
            onChange={() => handleCheckboxChange(option.id)}
          />
          <label htmlFor={option.id} style={{border:'none',marginTop:'-2px',marginLeft:'2px',padding:'0px'}}>{option.label} </label>
        </div>
      ))}
      
      <input 
        type="text"
        value={newOption} style={{border:'none'}}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Add new option"
      />
      <button onClick={handleAddNewOption}>Add Option</button>
    </div>
  );
}
export default MyComponent;

// {checkboxItems.map((item) => (
//     <Checkbox id='myCheckbox'
//               key={item.value}
//       checked={selectedItems.includes(item.value)}
//       onChange={(event) => handleCheckboxChange(event, item.value)}
//     />
//   ))}