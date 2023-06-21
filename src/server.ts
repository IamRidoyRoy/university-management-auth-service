// getting-started.js
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { logger, errorogger } from './shared/logger'
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('Database is connected Successfully')

    app.listen(config.port, () => {
      logger.info(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    errorogger.error('Something is wrong!, Failed to connect DB', err)
  }
}

bootstrap()
