import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { MyConfigModule } from '../config/config.module'
import { CommandEntity } from '../entities/command.entity'
import { MessageEntity } from '../entities/message.entity'

import { DatabaseCommandRepository } from './command.repository'
import { DatabaseMessageRepository } from './message.repository'


@Module({
  imports: [MyConfigModule, TypeOrmModule.forFeature([CommandEntity, MessageEntity])],
  providers: [DatabaseMessageRepository, DatabaseCommandRepository],
  exports: [DatabaseMessageRepository, DatabaseCommandRepository],
})
export class RepositoriesModule {}