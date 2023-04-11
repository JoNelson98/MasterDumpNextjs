export default async formData => {
  const response = await fetch('/api/mail', {
    method: 'POST',
    body: JSON.stringify(formData)
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return await response.json()
}
