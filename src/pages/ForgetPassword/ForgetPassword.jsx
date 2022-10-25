import React from 'react';
import { emailValidationSchema } from 'utils/validation';
import { FormProvider, useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const methods = useForm({
    resolver: yupResolver(emailValidationSchema),
    mode: "all",
    defaultValues: {
      email: ""
    }
  });

  const { control, handleSubmit, formState: { isDirty, isValid }
  } = methods;


  const onSubmit = React.useCallback((data) => {

  })

  return (
    <div>

    </div>
  );
}

export default ForgetPassword;
