import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Contact = () => {
  const formik = useFormik({
    initialValues: {
      subject: '',
      content: '',
      email: ''

    },
    validationSchema: Yup.object({
      subject: Yup.string().required('Subject is required'),
      content: Yup.string().required('News Body is Required'),
      email: Yup.string().required('E-mail Required'),
    }),
    onSubmit: values => {
      console.log(values)
    },
  });
  return (
    <div className="row">
      <div className="col-lg-4 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className='form-label' htmlFor="subject">Subject</label>
            <input className='form-control'
              id="subject"
              type="text"
              {...formik.getFieldProps('subject')}
            />
            {formik.touched.subject && formik.errors.subject ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.subject}
              </Alert>
            ) : null}
          </div>

          <div className="mb-4">
            <label className='form-label' htmlFor="content">Content</label>
            <input className='form-control' id="content" type="text" {...formik.getFieldProps('content')} />
            {formik.touched.content && formik.errors.content ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.content}
              </Alert>
            ) : null}
          </div>

          <div className="mb-4">
            <label className='form-label' htmlFor="email">E-mail</label>
            <input className='form-control' id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.email}
              </Alert>
            ) : null}
          </div>
          <Button variant="primary m-auto">Submit</Button>
        </form>
      </div>
    </div>

  );
}

export default Contact
