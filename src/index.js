const express = require('express')
const { spawn, Thread, Worker } = require('threads')

// :: ---

const { HOSTNAME } = process.env
const PORT = +(process.env.PORT || 8000)

// :: ---

const app = express()

app.get('/', (_, res) => res.send(`Hello from ${HOSTNAME}!`))

app.get('/compute', async (_, res) => {
  const __task = await spawn(new Worker('./services/compute'))
  const hash = await __task()

  Thread.terminate(__task)

  res.send(`${HOSTNAME} : ${hash}`)
})

// :: ---

app.listen(PORT, () => console.log(`App listening on port ${PORT}.`))
