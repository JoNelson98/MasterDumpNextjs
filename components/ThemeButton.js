import useCustomTheme from '@/util/hooks/useTheme'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaSearch,
  FaSun,
  FaRegMoon
} from 'react-icons/fa'
import React from 'react'

export default function ThemeButton() {
  const { theme, toggleTheme } = useCustomTheme()
  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center p-2 text-gray-500 transition duration-150 ease-in-out bg-gray-100 border border-transparent rounded-md lg:bg-white lg:dark:bg-gray-900 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-700 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50"
    >
      {theme === 'light' ? <FaRegMoon /> : <FaSun />}
    </button>
  )
}
