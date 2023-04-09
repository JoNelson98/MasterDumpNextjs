import React from 'react'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Field, ErrorMessage } from 'formik'

export default function DatePicker(props) {
  const { label, name, ...rest } = props
  const labelStyle =
    'mb-3 block text-base font-medium dark:text-white text-[#07074D]'

  return (
    <div className="form-control">
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <Field name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form
          const { value } = field
          return (
            <DateView
              id={name}
              {...field}
              {...rest}
              selected={value}
              onChange={val => setFieldValue(name, val)}
            />
          )
        }}
      </Field>
      <ErrorMessage
        name={name}
        component={() => (
          <div>
            <span className="error">{props.errors[name]}</span>
          </div>
        )}
      />
    </div>
  )
}
