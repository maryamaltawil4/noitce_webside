import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import './Form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {FormElement ,InputElement ,ButtonElement} from './StyledComponents';

function FormModel({ show, item ,toggleForm , updateData, data}) {

    const [nextId, setNextId] = useState(data.length + 1); 

      const onSubmit = (values, { resetForm }) => {
        if (item && item.id !== null) {
          const updatedData = data.map(existingItem =>
            existingItem.id === item.id ? { ...existingItem, ...values } : existingItem
          );
          localStorage.setItem('todo', JSON.stringify(updatedData));
          updateData(updatedData);
        } else {
          const newItem = { ...values, id: nextId };
          setNextId(nextId + 1);
          localStorage.setItem('todo', JSON.stringify([...data, newItem]));
          updateData([...data, newItem]);  
        }
        toggleForm(false);
        resetForm();
      };

    const { values, errors, handleChange, handleBlur, touched, handleSubmit } = useFormik({
      initialValues: {
        id: item ? item.id : nextId,
        name: item ? item.name : '',
        description: item ? item.description : '',
        isCompleted: item ? item.isCompleted : false,
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  
    return (
      <>
        <Modal show={show} onHide={() => toggleForm(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              Add a task with excitement! Start strong, finish stronger{' '}
              <FontAwesomeIcon icon={faClipboardCheck} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormElement onSubmit={handleSubmit}>
              <InputElement
                placeholder="Name"
                id="name"
                type="text"
                value={values?.name || item?.name }
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
                value={values?.description || item?.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.description && touched.description ? 'input-error' : ''}
              />
              {errors.description && touched.description && <pre className="error">{errors.description} </pre>}
              <br />
              <ButtonElement type="submit">{item ? 'Update' : 'Add'}</ButtonElement>
            </FormElement>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
  FormModel.propTypes = {
    item: PropTypes.shape({
      id:PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      isCompleted: PropTypes.bool,
    }),
  };
  
  export default FormModel;
  