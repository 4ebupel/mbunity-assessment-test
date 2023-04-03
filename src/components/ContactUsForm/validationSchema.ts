/* eslint-disable no-control-regex */
import { object, string } from "yup";

const EMAILPATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validationSchema = object({
  firstName: string().required('First Name is required'),
  lastName: string().required('Last Name is required'),
  email: string().matches(EMAILPATTERN, 'Incorrect Email').required('Email is required'),
  phone: string().required('Phone Number is required'),
  subject: string(),
  message: string(),
});

export default validationSchema;

