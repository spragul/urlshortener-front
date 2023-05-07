import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import * as yup from 'yup'



const userSchemaValidation = yup.object({
  name: yup.string().required("Please fill in your Name"),
  mobile:yup.string().required("Entre your mobile number"),
  email: yup.string().required("Please fill in your Email"),
  password: yup.string().required("please write proper password"),
 
})

export function Signup() {
  const history =useHistory()
  const sign = async ({ newuser }) => {
    console.log(newuser);
    try {
      const response = await fetch("https://urlshortener-3bwd.onrender.com/signup", {
        method: "POST",
        body: JSON.stringify(newuser),
        headers: {
          "Content-Type": "application/json",
        },
      })
      const data = await response.json();
        history.push("/login")
        toast("Email verfication link send your email");
      
    } catch (error) {
      console.log(error)
      toast("error")
    }
  }
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues: {
      name:'',
      mobile:'',
      email: '',
      password: '',
    },
    validationSchema: userSchemaValidation,
    onSubmit: (newuser) => {
      sign({ newuser });
      console.log(newuser)
    }

  })

  return (
    <div className="bg-cl back">
    <MDBContainer fluid style={{height:"100vh",height:'auto' }}>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Signup</h2>
              <p className="text-white-50 mb-3">Please Register Details</p>
              <form onSubmit={handleSubmit} className="text-areas">
              <MDBInput onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              wrapperClass='mb-4 w-100' 
              label='Name' 
              id='formControlLg' 
              type='text' 
              name='name'
              size="lg" />
               {touched.name && errors.name ? <p style={{ color: "crimson" }}>{errors.name}</p> : ""}
               <MDBInput onChange={handleChange}
              onBlur={handleBlur}
              value={values.mobile}
              wrapperClass='mb-4 w-100' 
              label='Mobile Number' 
              id='formControlLg' 
              type='number' 
              name='mobile'
              size="lg" />
               {touched.mobile && errors.mobile ? <p style={{ color: "crimson" }}>{errors.mobile}</p> : ""}
              <MDBInput onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              wrapperClass='mb-4 w-100' 
              label='Email address' 
              id='formControlLg' 
              type='email' 
              name="email"
              size="lg" />
               {touched.email && errors.email ? <p style={{ color: "crimson" }}>{errors.email}</p> : ""}
              <MDBInput onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              wrapperClass='mb-4 w-100' 
              label='Password' 
              id='formControlLg' 
              type='password' 
              name='password'
              size="lg" />
               {touched.password && errors.password ? <p style={{ color: "crimson" }}>{errors.password}</p> : ""}
             
              <MDBBtn 
              type="submit"
              size='lg' >
                Signup
              </MDBBtn>
              </form>
              <hr></hr>
              <div>
                <a href="/login">Already have an account? Login!</a>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
    </div>
  );
}
