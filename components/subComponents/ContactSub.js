import React from 'react'

export default function ContactSub({
  title = 'Title',
  description = 'Description',
  buttonTitle = 'Button Title',
  showButton = false,
  btnLink = '/',
  phone = false,
  btnFunction = () => null
}) {
  return (
    <article
      style={{ backdropFilter: 'blur(20px)' }}
      class="container bg-clip-padding bg-opacity-60 bg-white shadow-xl rounded-2xl p-5"
    >
      <h1 class="font-bold text-sky-500">{title}</h1>
      <p class="font-light text-gray-500">{description}</p>
      {phone && (
        <a href="tel:469-379-0857" class="text-sky-500">
          <p>
            <i class="fas fa-phone-alt" /> (469)-456-7890
          </p>
        </a>
      )}

      <div class="text-sm text-gray-300 mb-5" />
      {showButton && (
        <a
          href={btnLink}
          target="_blank"
          onClick={btnFunction}
          class="mt-5 rounded-lg py-2 px-4 text-center text-white bg-sky-400 hover:bg-sky-500"
        >
          {buttonTitle}
        </a>
      )}
    </article>
  )
}
