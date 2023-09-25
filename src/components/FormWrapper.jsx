import {useState} from 'react';
import Show from './Show';
import FormModel from './FormModel';

const FormWrapper = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [storedData, setData] = useState(JSON.parse(localStorage.getItem('todo')) || []);
    const [selectedItem, setSelectedItem] = useState(null); // New state to hold the selected item

    const updateData = (updatedData) => {
        setData(updatedData);
        setIsFormVisible(false);
        setSelectedItem(null);
      };

    const onEditClicked =(item) => {
        setIsFormVisible(true);
        setSelectedItem(item);
    } 

    const toggleForm = (value) => {
        setIsFormVisible(value);
        setSelectedItem(null);
    }
    console.log('selectedItem', selectedItem)
    return (
        <>
            <button id="button" className="centered-button" onClick={() => setIsFormVisible(true)}>Add new todo</button>
            <Show data={storedData} onEditClicked={(item) => onEditClicked(item)} updateData={setData}/>
            <FormModel show={isFormVisible} 
            toggleForm={(value) => toggleForm(value)} 
            data={storedData} 
            updateData={updateData}
            item={selectedItem}/>
            
        </>

    )
};

export default FormWrapper;