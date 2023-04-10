export const col = [
  {
    field: 'fullName',
    use: 'Name'
  },

  {
    field: 'phone',
    use: 'Phone Number'
  },
  {
    field: 'email',
    use: 'Email Address'
  },
  {
    field: 'address',
    use: 'Address'
  },

  {
    field: 'deliveryDate',
    use: 'Rental Duration'
  },
  {
    field: 'deliveryPlacement',
    use: 'delivery Placement'
  },
  {
    field: 'dumpsterSize',
    use: 'Dumpster Size'
  },
  {
    field: 'company',
    use: 'Company'
  }
]

export const formatDate = date => {
  const DURATION_OF_RENTAL = 5
  const d = new Date(date)
  const end = new Date(date)
  end.setDate(end.getDate() + DURATION_OF_RENTAL)
  const eYear = end.getFullYear()
  const eMonth = end.getMonth() + 1
  const eDay = end.getDate()

  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  return `${month}/${day}/${year}` + ' - ' + `${eMonth}/${eDay}/${eYear}`
}

export const formatApplicants = applicants => {
  return applicants.map(app => {
    return {
      ...app,
      fullName: `${app.fName} ${app.lName}`,
      address: `${app.address} ${app.city}`,
      company: app.company ? app.company : 'N/A',
      deliveryDate: app.deliveryDate ? formatDate(app.deliveryDate) : 'N/A',
      deliveryPlacement: app.deliveryPlacement ? app.deliveryPlacement : 'N/A'
    }
  })
}

export const actionHandler = (action, rows) => {
  console.log(action, rows)
  switch (action) {
    case 'Update':
      console.warn('Update Action')
      break
    case 'Delete':
      rows.forEach(row => console.warn('delete item by this id', row.id))
      break

    default:
      break
  }
}
