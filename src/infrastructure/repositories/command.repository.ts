import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CommandsRepository } from 'src/domain/repositories/commands.interface'

import { CommandEntity } from '../entities/command.entity'

@Injectable()
export class DatabaseCommandRepository implements CommandsRepository {
  constructor(
    @InjectRepository(CommandEntity)
    private readonly _commandEntityRepository: Repository<CommandEntity>,
  ) {}

  async insert(command: string): Promise<string> {

    await this._commandEntityRepository.insert({})
    console.log(command)
    return ''
  }
}