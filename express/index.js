import dontenv from 'dotenv'
import express from 'express'

import { getTodayMatches } from './lib/scraper.js'

dontenv.config()

const app = express()

app.get('/api/matches', async (req, res, next) => {
  const data = await getTodayMatches()

  res.json(data)
})

app.listen(3000, () => console.log(`Example app listening on http://localhost:3000!`))
