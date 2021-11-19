import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContext } from "./toast-context";

const ToastProvider = (props) => {
  const toggleToastHandler = () => {
    toast.success("Hello There");
  };

  const toastContext = {
    toggleToast: toggleToastHandler,
  };

  return (
    <ToastContext.Provider value={toastContext}>
      {props.children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
