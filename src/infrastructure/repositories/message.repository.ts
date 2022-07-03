import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { MessageRepository } from 'src/domain/repositories/message.interface'

import { MessageEntity } from '../entities/message.entity'

@Injectable()
export class DatabaseMessageRepository implements MessageRepository {
  constructor(
    @InjectRepository(MessageEntity)
    private readonly _messageEntityRepository: Repository<MessageEntity>,
  ) {}

  async insert(command: string): Promise<string> {
    await this._messageEntityRepository.insert({})
    console.log(command)
    return ''
  }

  async findAll(): Promise<string[]> {
    return ['']
  }
}