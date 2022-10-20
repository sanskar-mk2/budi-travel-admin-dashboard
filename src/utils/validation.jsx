import * as yup from "yup";

const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username  is required ").email("Email is invalid"),
  password: yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(40, "Password must not exceed 40 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain Minmum 8 Characters, alphanumeric, with upper and lower alphabet cases"
    )
});

const emailValidationSchema = yup.object({
  email: yup.required("Email is required").email("Email is invalid")
});

export {
  loginValidationSchema,
  emailValidationSchema
};





