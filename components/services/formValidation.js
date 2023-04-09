import * as yup from 'yup'

export const formSchema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
  city: yup.string().required('City is required'),

  address: yup.string().required('Address is required'),
  deliveryDate: yup.date().required('Delivery Date is required').nullable(),
  deliveryPlacement: yup.string(),
  company: yup.string()
})
