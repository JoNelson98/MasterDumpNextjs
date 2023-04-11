import React from 'react'
import Layout from '@/components/layouts/pagelayout'
import { Formik, Field } from 'formik'
import submitFormService from '@/components/services/submitForm'
// import mailService from '@/components/services/mailService'
import { phoneNumberMask } from '@/components/subComponents/PhoneInput'
import MaskedInput from 'react-text-mask'
import { cities, placements } from '../components/subComponents/inputData'
import DatePicker from '@/components/subComponents/DatePicker'
import Section from '@/components/layouts/section'
import { formSchema } from '@/components/services/formValidation'
import smsService from '@/components/services/smsService'

export default function booking() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <Section delay={0.1}>
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-l from-red-500 to-sky-500 bg-clip-text text-transparent  sm:text-6xl">
                Submit A Rental Order.
              </h2>
              <p className="mt-6 mb-8 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Fill out the form below to submit a rental order for a dumpster.
                We will contact you soon after to confirm and process your
                order.
              </p>
            </div>
          </Section>

          <Section delay={0.2}>
            <Formik
              initialValues={{
                fName: '',
                lName: '',
                phone: '',
                email: '',
                address: '',
                city: '',
                deliveryDate: new Date(),
                deliveryPlacement: '',
                dumpsterSize: '',
                company: ''
              }}
              validationSchema={formSchema}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  await submitFormService(values).then(() => {
                    alert(
                      'Form Submitted Successfully! The Team will get back with you shortly.'
                    )
                    resetForm()
                  })
                  await smsService(values)
                    .then(res => {
                      alert('SMS sent successfully!')
                    })
                    .catch(err => alert(err.message))
                  // await mailService(values)
                } catch (error) {
                  alert(error)
                  console.error(error)
                }

                setSubmitting(false)
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <form onSubmit={handleSubmit}>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="fName"
                          className="mb-3 block text-base font-medium  dark:text-white text-[#07074D]"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="fName"
                          id="fName"
                          placeholder="First Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fName}
                        />
                        {errors.fName && touched.fName && errors.fName}
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="lName"
                          className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lName"
                          id="lName"
                          placeholder="Last Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lName}
                        />
                        {errors.lName && touched.lName && errors.lName}
                      </div>
                    </div>
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="phone number"
                          className="mb-3 block text-base font-medium  dark:text-white text-[#07074D]"
                        >
                          Phone*
                        </label>
                        <Field
                          name="phone"
                          id="phone"
                          placeholder="Enter phone number"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                          render={({ field }) => (
                            <MaskedInput
                              {...field}
                              mask={phoneNumberMask}
                              id="phone"
                              placeholder="Enter your phone number"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                          )}
                        />
                        {errors.phone && touched.phone ? (
                          <div className="text-red-500">{errors.phone}</div>
                        ) : null}
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                        >
                          Email*
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter email address"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                        {errors.email && touched.email ? (
                          <div className="text-red-500">{errors.email}</div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="address"
                      className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                    >
                      Delivery address
                    </label>
                    <Field
                      type="string"
                      name="address"
                      id="address"
                      placeholder="124 Your Street"
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    {errors.address && touched.address ? (
                      <div className="text-red-500">{errors.address}</div>
                    ) : null}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="city"
                      className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                    >
                      City
                    </label>
                    <select
                      name="city"
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="" label="Select a city">
                        Select a City
                      </option>
                      {cities.map(city => (
                        <option key={city} value={city} label={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.city && touched.city ? (
                      <div className="text-red-500">{errors.city}</div>
                    ) : null}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="dumpsterSize"
                      className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                    >
                      Dumpster Size
                    </label>
                    <select
                      name="dumpsterSize"
                      value={values.dumpsterSize}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="" label="Select a Dumpster Size">
                        Select a Dumpster Size
                      </option>
                      {[
                        '10 yards (300$)',
                        '15 yards (350$)',
                        '20 yards (400$)'
                      ].map(city => (
                        <option key={city} value={city} label={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.dumpsterSize && touched.dumpsterSize ? (
                      <div className="text-red-500">{errors.dumpsterSize}</div>
                    ) : null}
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <DatePicker
                          type="date"
                          name="deliveryDate"
                          id="deliveryDate"
                          label="Pick Delivery Date"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <label
                          htmlFor="deliveryPlacement"
                          className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                        >
                          Delivery Placement
                        </label>

                        <select
                          name="deliveryPlacement"
                          value={values.deliveryPlacement}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        >
                          <option value="" label="Select a placement">
                            Select a placement
                          </option>
                          {placements.map(p => (
                            <option key={p} value={p} label={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.deliveryPlacement && touched.deliveryPlacement ? (
                        <div className="text-red-500">
                          {errors.deliveryPlacement}
                        </div>
                      ) : null}
                      {/* new placement */}
                    </div>
                    <div className="mb-5 w-full px-3">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-base font-medium dark:text-white text-[#07074D]"
                      >
                        Company (optional)
                      </label>
                      <Field
                        type="string"
                        name="company"
                        id="company"
                        placeholder="Enter your company name"
                        className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <button
                      disabled={isSubmitting}
                      className=" w-full hover:shadow-form rounded-md bg-sky-500 py-3 px-8 text-center text-base font-semibold dark:text-white text-[#07074D] outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </Section>
        </div>
      </div>
    </Layout>
  )
}
