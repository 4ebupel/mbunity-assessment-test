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

// firstName: string().required(),
// email: string().email(),

// const userSchema = object({
//   name: string().min(2, 'Too short name').max(60, 'Too long name').required('Name is required'),
//   email: string().matches(EMAIL_PATTERN, 'Incorrect Email').required('Email is required'),
//   phone: string().matches(PHONE_PATTERN, '+38 (XXX) XXX - XX - XX').required('Phone is required'),
//   positionId: number().min(1).required(),
//   photo: mixed<File>().required('Photo is required').test('fileSize', 'The file is too large', (value) => {
//     if (!value) {
//       return true;
//     }

//     return value?.size < 5000000;
//   }),
// });
