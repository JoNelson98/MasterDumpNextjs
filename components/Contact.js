import React from 'react'
import ContactSub from './subComponents/ContactSub'

export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-gray-300 ">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=dallas%20texas+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ filter: ' contrast(1.2) opacity(0.4)' }}
        />
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div
          style={{ backdropFilter: 'blur(20px)' }}
          className="lg:w-1/3 md:w-1/2 bg-white  bg-clip-padding bg-opacity-60 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
        >
          <div className="relative mb-4">
            <ContactSub
              title="Contact"
              description="Get in Contact through phone."
              phone
            />
          </div>
          <div className="relative mb-4">
            <ContactSub
              title="Address"
              description="Dallas Metropolitan Area"
            />
          </div>
          <div className="relative mb-4">
            <ContactSub
              title="Business Hours"
              description="Open 24 Hours a Day, 7 Days a Week"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
