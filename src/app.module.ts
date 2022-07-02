import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

import { config } from './infrastructure/config/configs/global.config'
import { typeOrmConfig } from './infrastructure/config/configs/typeorm.config'

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
    ],
    providers: [],
})
export class AppModule {}
