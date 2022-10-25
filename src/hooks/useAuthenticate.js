import React from "react";
import { useFetch, useLocalStorage } from "hooks";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { USER } from 'constants/localstorage.constants';
export const useAuth = () => {
  const { setLocalStorage, getLocalStorage } = useLocalStorage();
  const [errorMessage, setErrorMessage] = React.useState(null);
  const navigate = useNavigate();
  const session = React.useMemo(() => {
    try {
      return getLocalStorage(USER)
    } catch (error) {
      console.warn("Session expired ")
    }
  }, [getLocalStorage])


  const { isLoading, callFetch } = useFetch({
    initialUrl: '',
    skipOnStart: true,
    config: {
      method: "post"
    }
  });



  const login = React.useCallback((data) => {
    if (data) {
      callFetch(
        {
          url: "",
          method: "post",
          data: data,
          onSuccess: (response) => {
            // user
            setLocalStorage();
            // token
            setLocalStorage();
            toast.success("");
          },
          onFailure: (error) => {
            toast.error("");
          }
        }
      );
    } else {

    }

  }, [callFetch]);


  const forgetPassword = React.useCallback((data) => {
    callFetch({
      url: "",
      method: "post",
      data: data,
      onSuccess: (response) => {
        toast.success("");
      },
      onFailure: (error) => {
        toast.error("");
      }

    })
  }, [callFetch])

  const otpVerification = React.useCallback((data) => {
    callFetch({
      url: "",
      method: "post",
      data: data,
      onSuccess: (response) => {
        toast.success("");
      },
      onFailure: (error) => {
        toast.error("");
      }
    })
  }, [callFetch])


  return {
    login,
    otpVerification,
    errorMessage,
    isLoading,
    session, 
    forgetPassword
  }
}