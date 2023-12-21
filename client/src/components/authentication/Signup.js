import React, { useState } from 'react'
import InputField from './InputField';
import { Formik } from 'formik';
import {signupValidationSchema} from "./validationSchema"
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from './useAuth';
import Loader from './Loader';
const initialValues = {
  email: "",
  password: "",
  confirmPassword:""
};
const Signup = () => {
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup, isLoading } = useAuth();
  const onSubmit = async(values) => {
    try {
     const res=signup({ email:values.email, password:values.password });
     if(res){
      navigate("/login");
     }
    } catch (error) {
      if (error) {
        console.log(error)
        toast.error(error.message);
      }
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <p className='font-serif font-medium text-lg mb-3'>SIGN UP</p>

      <div className='w-[40%]  rounded-md border p-5'>
      <Formik
      initialValues={initialValues}
      validationSchema={signupValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>

          <div className='flex flex-row'>
            <InputField  name="email" type="email" placeholder="Email.." />
          </div>
  
                <InputField name="password" show={true} type={showPassword ? "text" : "password"} togglePasswordVisibility={togglePasswordVisibility} showPassword={showPassword} placeholder="Password.." />
                <InputField name="confirmPassword" show={true} type={showConfirmPassword ? "text" : "password"} togglePasswordVisibility={toggleConfirmPasswordVisibility} showPassword={showConfirmPassword} placeholder="Confirm Password.." />

          <div className='h-full grid place-items-end mt-5'>
          <button type="submit" className="bg-[#25224A] w-full text-white font-semibold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline">
              {
                isLoading?(
                 <Loader size={20}/>
                ):(
                  <p>REGISTER</p>
                )
              }
              
            </button>
          </div>
        </form>
      )}
    </Formik>
    <div  className="flex flex-row mt-4 justify-center items-center" >
             <p className="font-serif text-md font-medium">Already have an account? </p>
             <Link to={"/"}>
            <span className=" text-[#3E76F9] font-serif font-medium text-[16px]"> Signin</span>
            </Link>
            </div>
            <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </div>
    </div>
  )
}

export default Signup