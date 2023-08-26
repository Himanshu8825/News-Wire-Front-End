import React from 'react'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const EditNews = () => {
  const formik = useFormik({
    initialValues: {
      tittle: 'Tittle',
      content: 'Content',
      author: 'Author',
      image: 'https://picsum.photos/1920/1080'
    },
    validationSchema: Yup.object({
      tittle: Yup.string().required('Tittle is required'),
      content: Yup.string().required('News Body is Required'),
      author: Yup.string().required('UserName Required'),
      image: Yup.string().url('Must Be A Valid Url').required('Image is required')
    }),
    onSubmit: values => {
      console.log(values);
    },
  });
  return (
    <div className="row">
      <div className="col-lg-4 ">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className='form-label' htmlFor="tittle">Heading</label>
            <input className='form-control'
              id="tittle"
              type="text"
              {...formik.getFieldProps('tittle')}
            />
            {formik.touched.tittle && formik.errors.tittle ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.tittle}
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
            <label className='form-label' htmlFor="author">Author</label>
            <input className='form-control' id="author" type="text" {...formik.getFieldProps('author')} />
            {formik.touched.author && formik.errors.author ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.author}
              </Alert>
            ) : null}
          </div>

          <div className="mb-4">
            <label className='form-label' htmlFor="image">Image</label>
            <input className='form-control' id="image" type="text" {...formik.getFieldProps('image')} />
            {formik.touched.image && formik.errors.image ? (
              <Alert className='mt-3' variant={'danger'}>
                {formik.errors.image}
              </Alert>
            ) : null}
          </div>

          <Button variant="primary m-auto">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default EditNews
