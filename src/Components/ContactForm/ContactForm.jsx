import React from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = ({ handleAddContact }) => {

    const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
    const onlyNumbers = /^[0-9]+$/;
    
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required')
            .matches(onlyLetters, 'Only letters'),
        number: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required').matches(onlyNumbers, 'Only numbers')
    })
    

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        handleAddContact(values.name, values.number);
        actions.resetForm();
    };

    return (
        <section >
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
             >
                <Form >
                    <div >
                        <label>Name</label>
                        <Field  name="name"></Field>
                        <ErrorMessage  component='p' name="name"/> 
                    </div>
                    <div >
                        <label>Number</label>
                        <Field  name="number"></Field>
                        <ErrorMessage  component='p' name="number"/>
                    </div>
                    <button  type='submit'>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
}

export default ContactForm;