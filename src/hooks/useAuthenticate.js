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
  const onSuccess = React.useCallback((response) => {
    if (response?.token) {
      toast.success(response?.message);
      navigate("/");
    }
    else {
      toast.success(response?.message);
      navigate('/verify-otp');
    }
  }, [ navigate]);
  const onFailure = React.useCallback((errors) => {
    toast.error(errors);
  }, []);

  const { isLoading, callFetch } = useFetch({
    initialUrl: "/api/login/",
    skipOnStart: true,
    onFailure,
    onSuccess,
  });

  const login = React.useCallback((data) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);
    callFetch({
      url: "api/login/",
      method: "post",
      data: formData,
    });
  }, [callFetch])

  const verifyToken = React.useCallback((data) => {
    callFetch({
      url: "/login/",
      method: "post",
      data: data,
      onSuccess: (res) => {
        toast.success(res.msg);
        navigate('/login');
      },
      onFailure: (err) => {
        toast.error(err.msg)
      }
    });
  }, [callFetch , navigate])

  const forgetPassword = React.useCallback((data) => {
    callFetch({
      url: "/forget-password/",
      method: "post",
      data: data,
      onSuccess: (res) => {
        toast.success(res.msg);
      },
      onFailure: (err) => {
        toast.error(err.msg)
      }
    });
  }, [callFetch])

  const logout = React.useCallback(() => {
    if (window !== undefined) {
      callFetch({
        url: "/logout",
        method: "post",
      });
      localStorage.clear();
      window.location.reload();
    }
  }, [callFetch])
  
  return {
    session,
    verifyToken,
    logout,
    login,
    forgetPassword,
    isLoading
  }
}