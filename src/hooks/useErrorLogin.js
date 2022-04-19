import React, { useState, useContext, createContext } from 'react';

const ErrorContext = createContext();

export function ProviderError({ children }) {
  const error = useProvideError();
  return <ErrorContext.Provider value={{ ...error }}>{children}</ErrorContext.Provider>;
}

export const useErrorLogin = () => {
  return useContext(ErrorContext);
};

function useProvideError() {
  const [errorState, setError] = useState('');

  const addError = (mesage) => {
    setError(mesage);
  };

  return {
    errorState,
    addError,
  };
}
