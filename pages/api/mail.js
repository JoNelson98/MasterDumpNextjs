import sgMail from '@sendgrid/mail'

export default async (req, res) => {
  const body = JSON.parse(req.body)
  if (!body) return res.status(400).json({ message: 'No data' })
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'jayneltech@gmail.com',
    from: 'jonathanator14@gmail.com',
    subject: 'A new form has been submitted on your website!',
    text: 'A new form has been submitted on your website!',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }

  console.log(msg)
  await sgMail.send(msg)
  console.log(body)
  res.status(200).json({ data: body })
}
