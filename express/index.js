import dontenv from 'dotenv'
import express from 'express'

import { getTodayMatches } from './lib/scraper.js'

dontenv.config()

const app = express()

app.get('/', async (req, res, next) => {
  const data = await getTodayMatches()

  res.json(data)
})

app.listen(8080, () => console.log(`Example app listening on http://localhost:8080!`))
