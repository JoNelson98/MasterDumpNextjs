import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeButton from './ThemeButton'
import logo from '../public/darkmdLogo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { useParams } from 'react-router-dom'
import lightLogo from '../public/lightmdLogo.png'
import { useTheme } from 'next-themes'
import { useCallback, useEffect } from 'react'

const navigation = [
  { name: 'Book Rental', href: '/booking', current: true },
  { name: 'Gallery', href: '/gallery', current: false },
  { name: 'Contact', href: '/contact', current: false },
  { name: 'Admin', href: '/AdminDashboard', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const router = useRouter()
  const pathname = router.pathname
  const margin = pathname === '/' ? 'xl:mt-0' : 'xl:mt-16'
  const isHome = Boolean(pathname === '/')
  const { theme, setTheme } = useTheme()
  const isLightTheme = Boolean(theme === 'light')

  const isDarkTheme = useCallback(() => {
    return Boolean(theme === 'dark')
  }, [theme])

  return (
    <Disclosure
      as="nav"
      className={`border-b backdrop-blur bg-sky/900 dark:bg-gray-900/70 dark:border-gray-700 xl:fixed xl:w-full xl:top-0 xl:left-0 xl:z-30`}
    >
      {({ open }) => (
        <>
          <div className=" sm:px-6 lg:px-6 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex  items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center ">
                  <NextLink href="/">
                    <Image
                      className=" ml-6 block h-32 w-auto lg:hidden"
                      src={isDarkTheme() ? logo : lightLogo}
                      alt="Master Dump LLC Logo"
                    />
                  </NextLink>

                  <NextLink href="/">
                    <Image
                      className="ml-2 hidden h-32 w-auto lg:block"
                      src={isDarkTheme() ? logo : lightLogo}
                      alt="Your Company"
                    />
                  </NextLink>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ThemeButton />
                <div className="hidden sm:ml-6 sm:block content-center items-center">
                  <div className="flex space-x-4 items-center content-center">
                    {navigation.map(item => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href === pathname
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map(item => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.href === pathname
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
