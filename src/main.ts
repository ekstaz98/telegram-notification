import { Logger, ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

const logger = new Logger('AppBootstrap')

const DEFAULT_HOST_PORT = 3000

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule)
    const configService = app.get(ConfigService)

    const port = configService.get('PORT', 'localhost')
    const hostname = configService.get('HOST', DEFAULT_HOST_PORT)

    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            disableErrorMessages: false,
        }),
    )

    await app.listen(port, hostname, () =>
        logger.log(`Server running at ${hostname}:${port}`),
    )
}

// eslint-disable-next-line @typescript-eslint/no-extra-semi
;(async (): Promise<void> => {
    await bootstrap()
})().catch((error) => {
    logger.error(`Main error: ${error}`)
})
