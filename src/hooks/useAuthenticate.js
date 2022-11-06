import React from "react";
import { useFetch, useLocalStorage } from 'hooks';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
/*
 * session 
 * isloading login
 * verify otp 
 * reset password 
 * logout 
 * 
 */
export const useAuth = () => {
  const navigate = useNavigate();
  const { getLocalStorage,
    setLocalStorage } = useLocalStorage();
  const session = React.useMemo(() => {
    return getLocalStorage()
  }, [getLocalStorage]);
  const userValue = React.useMemo(() => {
    return getLocalStorage()
  }, [getLocalStorage]);
  const onSuccess = React.useCallback((response) => {
    if (response?.token) {
      setLocalStorage();
      setLocalStorage();
      toast.success(response?.message);
      navigate("/");
    }
    else {
      toast.success(response?.message);
      navigate('/verify-otp');
    }
  }, [navigate, setLocalStorage]);
  const onFailure = React.useCallback((errors) => {
    // toast.error(errors?.message);
    // 
    toast.error(errors?.message);
    console.log(errors, "login errors --> ");
    // 
    // 
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
      url: "/api/login",
      method: "post",
      data: {
        email: "abhijeet",
        password: "rightnwo"
      },
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
  }, [callFetch, navigate])

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
    userValue,
    verifyToken,
    logout,
    login,
    forgetPassword,
    isLoading
  }
}



