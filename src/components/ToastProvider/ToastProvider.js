import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Hola!',
      variant: 'error',
    },
    {
      id: crypto.randomUUID(),
      message: 'Adios!',
      variant: 'success',
    },
  ]);

  function createToast(message, variant) {
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ];

    setToasts(nextToasts);
  }

  function closeToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider value={{toasts, createToast, closeToast}}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
