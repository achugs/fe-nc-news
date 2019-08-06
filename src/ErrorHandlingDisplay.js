import React from 'react';

const ErrorHandlingDisplay = (error) => {
  return (
    <p>ERROR {error.status} {error.msg}</p>
  );
}

export default ErrorHandlingDisplay;
