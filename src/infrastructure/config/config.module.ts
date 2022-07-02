import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"

import { config } from "./configs/global.config"
import { typeOrmConfig } from "./configs/typeorm.config"

@Module({
    imports: [
        ConfigModule.forRoot(config),
        TypeOrmModule.forRootAsync(typeOrmConfig),
    ],
  })
export class MyConfigModule {}