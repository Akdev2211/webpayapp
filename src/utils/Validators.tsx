// Validate full name: Allow spaces between names and ensure all words start with a capital letter
export const validateFullName = (fullName: string) => {
  const regex = /^[A-Z][a-z]*(?: [A-Z][a-z]*)*$/;
  return regex.test(fullName);
};

// Validate email format
export const validateEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|in)$/;
  return regex.test(email);
};

// Validate phone number: Must be numeric and 10 digits
export const validatePhone = (phone: string) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

// Validate country/state/city: Alphabetic and space allowed
export const validateLocation = (location: string) => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(location);
};

// Validate ZIP code: Numeric and 5 to 6 digits
export const validateZipCode = (zipCode: string) => {
  const regex = /^[0-9]{5,6}$/;
  return regex.test(zipCode);
};
