const { expose } = require('threads/worker')
const crypto = require('crypto')

// :: ---

const LIMIT = +process.env.APP_COMPUTE_LIMIT || 5e5

expose(() => {
  return Array(LIMIT)
    .fill(null)
    .reduce(a =>
      crypto
        .createHash('md5')
        .update(a + new Date())
        .digest('hex')
    )
})
