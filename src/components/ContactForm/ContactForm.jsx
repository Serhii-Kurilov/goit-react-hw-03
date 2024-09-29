import { Formik, Field, Form, ErrorMessage } from 'formik';
import s from './ContactForm.module.css'
import * as Yup from 'yup';

const ContactForm = ({ addContact }) => {
    const handleSubmit = (values, options) => {
        addContact({
            id: Date.now(),
            name: values.name,
            number: values.number
        })
        options.resetForm()
    }

    const initialValues = {
  name: "",
  number: ""
    };

    const regex = /^\d{3}-\d{2}-\d{2}$/;
    const validationSchema = Yup.object({
        name: Yup.string().min(3).max(50).required(),
        number: Yup.string().matches(regex, 'Phone number is not valid').max(9).required(),
    });

    const handlePhoneInput = (e, setFieldValue) => {
        let input = e.target.value.replace(/\D/g, '');
        if (input.length > 3) {
            input = input.slice(0, 3) + '-' + input.slice(3);
        }
        if (input.length > 6) {
            input = input.slice(0, 6) + '-' + input.slice(6);
        }
        setFieldValue('number', input);
    };

  return (
      <div className={s.container}>
          <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
              {({ setFieldValue }) => (
              <Form className={s.form}>
                  <label className={s.label}>
                      <span>Name</span>
                      <Field className={s.input} name="name" />
                      <ErrorMessage name="name" />
                  </label>
                  <label className={s.label}>
                      <span>Number</span>
                      <Field className={s.input} name="number" onChange={(e) => handlePhoneInput(e, setFieldValue)} />
                      <ErrorMessage name="number" />
                 </label>
                  <button className={s.btn} type="submit">Add contact</button>
                  </Form>
              )}
          </Formik>
    </div>
  )
}

export default ContactForm