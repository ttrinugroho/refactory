const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const { data } = require("./data")

app.prepare().then(() => {
  const server = express()

  server.get('/api/partner', (req, res) => {
    res.status(200).json(data.partner)
  })

  server.get('/api/as-see-on', (req, res) => {
    res.status(200).json(data.asSeeOn)
  })

  server.get('/api/auth', (req, res) => {
    const header = req.headers
    if (header.cookie && header.cookie.includes("swr-test-token=swr")) {
      return res.status(200).json({ "status": 200, "user": "refactory", "email": "mail@refactory.com" })
    }
    return res.status(403).json({ "status": 403, "message": "user not found" })
  })

  server.get('/api/report-alumni', (req, res) => {
    res.status(200).json(data.alumniReport)
  })

  server.get('/api/list-course', (req, res) => {
    res.status(200).json(data.listCourse)
  })

  server.get('/api/detail-course', (req, res) => {
    res.status(200).json(data.detailCourse)
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
