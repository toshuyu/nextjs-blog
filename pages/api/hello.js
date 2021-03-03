// The API Route code will not be part of your client bundle, so you can safely write server-side code.
export default function handler(req, res) {
    res.status(200).json({ text: 1+3 })
  }