import { useState } from 'react';

const useRequestAQuoteForm = () => {
  const [inputs, setInputs] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({}) as any;

  const validateInputs = () => {
    const errors = {} as any;

    if (!inputs.name) {
      errors.name = "Name is required";
    }

    if (!inputs.companyName) {
      errors.companyName = "Company Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!inputs.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(inputs.email)) {
      errors.email = "Email is not valid";
    }

    const phoneRegex = /^[0-9]{10}$/; // Adjust this regex as per your phone number format
    if (!inputs.phone) {
      errors.phone = "Phone number is required";
    } else if (!phoneRegex.test(inputs.phone)) {
      errors.phone = "Phone number is not valid";
    }

    if (!inputs.message) {
      errors.message = "Message is required";
    } else if (inputs.message.length > 300) {
      errors.message = "Message cannot exceed 300 characters";
    }

    return errors;
  };

  const handleInput = (e: any) => {
    const { value, name } = e.target;

    setInputs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { inputs, handleInput, validateInputs, setErrors, errors };
};

export default useRequestAQuoteForm