import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import './Form.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Show from './Show';
import { useState } from 'react';
import PropTypes from 'prop-types';
import {FormElement ,InputElement ,ButtonElement,CloseButton} from './StyledComponents';


function Form({item, toggleForm}) {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [data, setData] = useState(JSON.parse(localStorage.getItem('todo')) || []);
  const [showData, setShowData] = useState(false);
  
  const onSubmit = (values) => {
     if (item !== null) {
    // If item exists, delete it
      const todos = localStorage.getItem('todo');
     // data.filter(todo => todo.id === item.id)
    } else {
      data.push(values);
      setData([...data]);
      localStorage.setItem('todo', JSON.stringify(data));
      
    }
    setIsFormVisible(false);
    toggleForm(false);
    //redirect to show component  
  };



  const { values , errors , handleChange , handleBlur , touched , handleSubmit } = useFormik({
    initialValues: {
    name: item ? item.name : '', 
    description: item ? item.description : '', 
    isCompleted: item ? item.isCompleted : false,
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <>
        <FormElement onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="d-flex">
              <p>
                Add a task with excitement! Start strong, finish stronger{'  '}
                <FontAwesomeIcon icon={faClipboardCheck} />
              </p>
              <CloseButton onClick={() => toggleForm(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </div>

            <InputElement
              placeholder="Name"
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name ? 'input-error' : ''}
            />
            {errors.name && touched.name && <pre className="error">{errors.name} </pre>}
            <br />
            <InputElement
              placeholder="description"
              id="description"
              type="text"
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.description && touched.description ? 'input-error' : ''}
            />
            {errors.description && touched.description && <pre className="error">{errors.description} </pre>}
            <br />
            <ButtonElement type="submit">Add</ButtonElement>
          </div>
        </FormElement>
      ) 
     
    </>
  );
}
Form.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    isCompleted: PropTypes.bool,
  })
};


export default Form;
