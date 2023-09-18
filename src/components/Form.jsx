

import { useFormik } from 'formik';
import { basicSchema } from '../schemas';
import './Form.css'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import Show from './Show';
import Navbar from './Navbar';
import { useState } from 'react';

const FormElement =styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background: rgba(51, 49, 49, 0.356);
padding: 25px;
border-radius: 10px;
color:white;
width: fit-content;
margin: 10% 30%;
`
const InputElement =styled.input`
border-radius: 5px;
width: 98%;
height: 30px;
margin: 20px 0px;
border-width: 0;
`
const ButtonElement=styled.button`
border-radius: 5px;
width: 100%;
height: 30px;
background: rgba(183, 166 , 178 , 0.7);
border-width: 0;
color:white;
opacity: 0.7;
transition: opacity 0.3s ease; 
&:hover {
  opacity: 1; 
}
`
function Form() {

    const [isFormVisible, setIsFormVisible] = useState(true)


    const onSubmit= (values)=>{
        console.log(values)
        setIsFormVisible(false);

      
    }



    const {values,errors,handleChange,handleBlur,touched,handleSubmit}=useFormik({
        
        initialValues:{
            name:"",
            description:""
        
        },
        validationSchema:basicSchema,
        onSubmit,
          
    });


  return (
  <>
    <Navbar/>

    {isFormVisible ? 
<FormElement onSubmit={handleSubmit} > 
    <div className="mb-3">
    <p>Add a task with excitement! Start strong, finish stronger  <FontAwesomeIcon icon={faClipboardCheck}/>
</p>

        <InputElement  placeholder='Name' id="name" type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} className={errors.name && touched.name?"input-error":""}/>
        {errors.name && touched.name && <pre className='error'>{errors.name} </pre>}
        <br/>
        <InputElement placeholder='description' id ="description" type="text" value={values.description} onChange={handleChange} onBlur={handleBlur}className={errors.description && touched.description?"input-error":""}/>
        {errors.description && touched.description && <pre className='error'>{errors.description} </pre>}
        <br/>
        <ButtonElement type="submit">Add</ButtonElement>
    </div>
    
</FormElement> : <Show/>}
  </>
  )
}

export default Form