import * as Yup from 'yup';
export const signupValidationSchema = Yup.object({
  email: Yup.string().required("Email is a required field").email("Email is not valid!"),
  password: Yup.string().required('Password  is required').min(6,"Minimum length is 6 "),
  confirmPassword:Yup.string().oneOf([Yup.ref("password")],"Passward must be match"),

})

export const loginValidationSchema=Yup.object({
  email: Yup.string().required("Email is a required field").email("Email is not valid!"),
  password: Yup.string().required('Password  is required').min(6,"Minimum length is 6 "),
})