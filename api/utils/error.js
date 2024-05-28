export const errorHandler = (statusCode, message) => {
  const error = new Error();  // It creates an error object with the specified status code  and message
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
