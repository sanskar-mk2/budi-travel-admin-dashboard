import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  email: yup.string().required("Username  is required ").email("Email is invalid"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must not exceed 40 characters")
});

const emailValidationSchema = yup.object().shape({
email:yup.string().email().required("")
})
export {
  loginValidationSchema,
  emailValidationSchema
};





