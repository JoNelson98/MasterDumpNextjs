import React from 'react'
import {
  actionHandler,
  col,
  formatApplicants
} from './subComponents/table.format'
import Table from 'react-tailwind-table'
import 'react-tailwind-table/dist/index.css'
import { signOut } from 'next-auth/react'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/20/solid'

export default function DataTable({ applicants }) {
  return (
    <div className="h-full w-full">
      <button
        onClick={() => signOut()}
        className="group relative flex w-full justify-center  bg-sky-600 px-3 py-2 text-sm font-semibold text-white hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
      >
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <ArrowLeftOnRectangleIcon
            className="h-5 w-5 text-sky-500 group-hover:text-sky-400"
            aria-hidden="true"
          />
        </span>
        Sign Out
      </button>
      <Table
        styling={{
          main: 'h-full',
          footer: {
            page_numbers: 'bg-gray-200 text-gray-600 hover:bg-gray-300 '
          }
        }}
        no_content_text="no search match"
        columns={col}
        rows={formatApplicants(applicants)}
        bulk_select_options={['Save', 'Delete', 'Update']}
        on_bulk_action={actionHandler}
      />
    </div>
  )
}
