export default async (req, res) => {
  const body = JSON.parse(req.body)
  if (!body) return res.status(400).json({ message: 'No data' })
  const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  )
  const msg = {
    to: process.env.TWILIO_TO_NUMBER,
    from: process.env.TWILIO_FROM_NUMBER,
    body: `${body.fName} ${body.lName} has submitted a Order form on your website!\n Check the admin panel for more details.`
  }
  console.log('Sending SMS...')
  console.log(msg)
  try {
    await client.messages.create(msg)
  } catch (error) {
    throw new Error(error)
  }
  res.status(200).json({ data: body })
}
