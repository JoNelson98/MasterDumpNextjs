import {
  LockClosedIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/20/solid'
import Section from './layouts/section'
import { signIn } from 'next-auth/react'
import NextLink from 'next/link'
import NextImage from 'next/image'
import lightLogo from '../public/lightmdLogo.png'

export default function Login() {
  return (
    <>
      <div className="bg-slate-50 z-50 w-full h-screen">
        <div className=" flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className=" bg-grey-50 w-full max-w-md space-y-8">
            <Section delay={0.1}>
              <div>
                <NextImage
                  className="mx-auto h-40 w-auto"
                  src={lightLogo}
                  alt="Your Company"
                />

                <h2 className="mt-6 text-center text-3xl font-bold  bg-gradient-to-l from-red-500 to-sky-500 bg-clip-text text-transparent">
                  Sign Into Dashboard
                </h2>
              </div>
            </Section>
            <Section delay={0.2}>
              <form className="mt-8 space-y-6" onSubmit={() => signIn()}>
                <div>
                  <button
                    type="submit"
                    className="group relative flex w-full justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <LockClosedIcon
                        className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </Section>
            <Section delay={0.3}>
              <NextLink href="/" passHref>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <ArrowLeftOnRectangleIcon
                      className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
                      aria-hidden="true"
                    />
                  </span>
                  Back to Home Page
                </button>
              </NextLink>
            </Section>
          </div>
        </div>
      </div>
    </>
  )
}
