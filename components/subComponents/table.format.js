export const col = [
  {
    field: 'fullName',
    use: 'Name'
    //Will not be used in search filtering
    //  use_in_search:false
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
    use: 'Delivery Date'
  },
  {
    field: 'deliveryPlacement',
    use: 'delivery Placement'
  },
  {
    field: 'company',
    use: 'Company'
  }
]

export const formatDate = date => {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  return `${month}/${day}/${year}`
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
